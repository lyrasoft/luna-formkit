<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit\Module\Front\Formkit;

use Lyrasoft\Contact\Event\ContactAfterSendEvent;
use Lyrasoft\Formkit\Entity\Formkit;
use Lyrasoft\Formkit\Event\FormkitBeforeSendEvent;
use Lyrasoft\Formkit\Formkit\FormkitService;
use Lyrasoft\Formkit\Formkit\Type\AbstractFormType;
use Lyrasoft\Formkit\Entity\FormkitResponse;
use Lyrasoft\Formkit\Enum\ResState;
use Lyrasoft\Formkit\FormkitPackage;
use Lyrasoft\Luna\Access\AccessService;
use Lyrasoft\Luna\Entity\User;
use Lyrasoft\Luna\Entity\UserRoleMap;
use Lyrasoft\Luna\Field\CaptchaField;
use Lyrasoft\Luna\Repository\UserRepository;
use Lyrasoft\Luna\User\UserService;
use Windwalker\Core\Application\AppContext;
use Windwalker\Core\Attributes\Controller;
use Windwalker\Core\Http\Browser;
use Windwalker\Core\Http\RequestAssert;
use Windwalker\Core\Utilities\Base64Url;
use Windwalker\DI\Attributes\Autowire;
use Windwalker\ORM\ORM;
use Windwalker\Query\Query;
use Windwalker\Uri\Uri;
use Windwalker\Uri\UriHelper;

use function Windwalker\response;

#[Controller]
class FormkitController
{
    public function submit(
        AppContext $app,
        ORM $orm,
        FormkitService $formkitService,
        Browser $browser,
        UserService $userService
    ) {
        $id = (int) $app->input('id');
        $ns = $app->input('ns');
        $return = $app->input('return');
        $content = $app->input($ns);

        $user = $userService->getUser();

        RequestAssert::assert($id, 'No ID');

        [$formkit, $fields, $form] = $formkitService->getFormkitMeta($id);

        $captcha = (bool) ($formkit->getParams()['captcha'] ?? false);

        if ($captcha) {
            /** @var CaptchaField $captchaField */
            $captchaField = $form['captcha'];
            $captchaField->validate($content['captcha'] ?? '');
        }

        // $form->validate($content);
        $appRequest = $app->getAppRequest();

        /** @var AbstractFormType $field */
        foreach ($fields as $field) {
            $content = $field->prepareStore($appRequest, $formkit, $content, $ns);
        }

        $res = new FormkitResponse();
        $res->setFormkitId($formkit->getId());
        $res->setState(ResState::PENDING);
        $res->setFrom($app->getNav()->localReferrer());
        $res->setContent($content);
        $res->setIp($appRequest->getClientIP());
        $res->setUa($browser->getUserAgent());
        $res->setDevice($browser->deviceType() . '/' . ($browser->device() ?: 'PC'));
        $res->setBrowser($browser->browser() . '/' . $browser->version($browser->browser()));
        $res->setOs($browser->platform());
        $res->setCreatedBy((int) $user->getId());

        $orm->createOne($res);

        $app->call(
            $this->sendAdminMail(...),
            [
                'item' => $formkit,
                'res' => $res,
            ]
        );

        if ($return) {
            $return = Base64Url::decode($return);
        } else {
            $return = $app->getSystemUri()->full();
        }

        $return = new Uri($return);
        $return = $return->withVar('form_submit', 'success');

        $app->addMessage('感謝您的提交', 'success');

        return response()->redirect($return);
    }

    protected function sendAdminMail(
        Formkit $item,
        FormkitResponse $res,
        AppContext $app,
        FormkitPackage $formkitPackage,
        FormkitService $formkitService,
        #[Autowire]
        UserRepository $userRepository,
    ): void {
        $message = $formkitService->createReceiverMailMessage($item, $res);

        $roles = $formkitPackage->config('receivers.roles') ?? ['superuser', 'manager'];

        /** @var User[] $users */
        $users = $userRepository->getListSelector()
            ->where('user.receive_mail', 1)
            ->where('user.enabled', 1)
            ->where('user.verified', 1)
            ->modifyQuery(
                fn(Query $query) => $query->where(
                    $query->expr(
                        'EXISTS()',
                        $query->createSubQuery()
                            ->select('*')
                            ->from(UserRoleMap::class)
                            ->whereRaw('user_id = user.id')
                            ->whereRaw('role_id IN(%r)', implode(',', $query->quote($roles)))
                    )
                )
            )
            ->limit(30)
            ->all(User::class);

        $sendEvent = $app->emit(
            FormkitBeforeSendEvent::class,
            compact(
                'message',
                'item',
                'res',
                'users',
            )
        );

        $users = $sendEvent->getUsers();
        $message = $sendEvent->getMessage();
        $item = $sendEvent->getItem();
        $res = $sendEvent->getRes();

        foreach ($users as $user) {
            $message->bcc($user->getEmail());
        }

        if ($message->getTo() || $message->getCc() || $message->getBcc()) {
            $message->send();
        }

        $app->emit(
            ContactAfterSendEvent::class,
            compact(
                'message',
                'item',
                'res',
                'users',
            )
        );
    }
}
