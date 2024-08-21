<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit\Module\Front\Formkit;

use Lyrasoft\Formkit\Entity\Formkit;
use Lyrasoft\Formkit\Formkit\FormkitService;
use Lyrasoft\Formkit\Formkit\Type\AbstractFormType;
use Lyrasoft\Formkit\Entity\FormkitResponse;
use Lyrasoft\Formkit\Enum\ResState;
use Lyrasoft\Luna\User\UserService;
use Windwalker\Core\Application\AppContext;
use Windwalker\Core\Attributes\Controller;
use Windwalker\Core\Http\Browser;
use Windwalker\Core\Http\RequestAssert;
use Windwalker\Core\Utilities\Base64Url;
use Windwalker\ORM\ORM;
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
        FormkitService $formkitService,
    ) {
        $fields = $formkitService->getFormattedContent($item, $res->getContent());

        // Todo: Send admin mail
    }
}
