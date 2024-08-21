<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit\Formkit;

use Lyrasoft\Formkit\Entity\Formkit;
use Lyrasoft\Formkit\Entity\FormkitResponse;
use Lyrasoft\Formkit\Formkit\Exception\FormkitUnpublishedException;
use Lyrasoft\Formkit\Formkit\Type\AbstractFormType;
use Lyrasoft\Formkit\FormkitPackage;
use Lyrasoft\Luna\Field\CaptchaField;
use Thunder\Shortcode\Event\ReplaceShortcodesEvent;
use Thunder\Shortcode\Events;
use Thunder\Shortcode\Shortcode\ReplacedShortcode;
use Thunder\Shortcode\Shortcode\ShortcodeInterface;
use Thunder\Shortcode\ShortcodeFacade;
use Windwalker\Core\Application\ApplicationInterface;
use Windwalker\Core\Form\FormFactory;
use Windwalker\Core\Mailer\MailerInterface;
use Windwalker\Core\Mailer\MailMessage;
use Windwalker\Core\Renderer\RendererService;
use Windwalker\Data\Collection;
use Windwalker\Form\Field\AbstractField;
use Windwalker\Form\Form;
use Windwalker\ORM\ORM;
use Windwalker\Utilities\Cache\InstanceCacheTrait;
use Windwalker\Utilities\Str;

use function Windwalker\collect;
use function Windwalker\now;

class FormkitService
{
    use InstanceCacheTrait;

    public function __construct(
        protected ApplicationInterface $app,
        protected ORM $orm,
        protected RendererService $rendererService,
        protected FormkitPackage $formkit,
    ) {
    }

    public function getFormTypes(): Collection
    {
        return collect($this->formkit->config('types'));
    }

    /**
     * @param  string  $typeId
     *
     * @return  class-string<AbstractFormType>|null
     */
    public function getFormTypeById(string $typeId): ?string
    {
        return $this->getFormTypes()[$typeId] ?? null;
    }

    public function getFormInstance(string $type, mixed $data): AbstractFormType
    {
        $className = $this->getFormTypeById($type);

        if (!$className) {
            throw new \OutOfRangeException("FormType '$type' not found");
        }

        /** @var AbstractFormType $field */
        $field = $this->app->make($className);
        $field->setData($data);

        return $field;
    }

    public function getFieldLayout(AbstractFormType $field): string
    {
        return 'formkit.types.form-' . $field::getId();
    }

    public function render(int|Formkit $item, array $options = []): string
    {
        /**
         * @var Formkit $item
         * @var Collection $fields
         * @var Form $form
         */
        [$item, $fields, $form] = $this->getFormkitMeta($item, $options);

        $id = $item->getId();

        $formkitService = $this;
        $force = $options['force'] ?? false;

        if (!$force && !$this->isAvailable($item)) {
            return $this->rendererService->render(
                'formkit.formkit-unpublished',
                compact(
                    'id',
                    'options',
                    'fields',
                    'item',
                    'formkitService',
                    'form'
                )
            );
        }

        return $this->rendererService->render(
            'formkit.formkit',
            compact(
                'id',
                'options',
                'fields',
                'item',
                'formkitService',
                'form'
            ),
        );
    }

    /**
     * @param  int|Formkit  $item
     * @param  array        $options
     *
     * @return  array{ 0: Formkit, 1: Collection<AbstractFormType>, 2: Form }
     *
     */
    public function getFormkitMeta(int|Formkit $item, array $options = []): array
    {
        if (!$item instanceof Formkit) {
            $item = $this->orm->mustFindOne(Formkit::class, $item);
        }

        $fields = collect($item->getContent());
        $formFactory = $this->app->retrieve(FormFactory::class);
        $form = $formFactory->create();
        $form->setNamespace($options['control'] ?? 'formkit');

        $fields = $fields->map(
            function (array $field) use ($form) {
                $data = collect($field);

                $fieldInstance = $this->getFormInstance($data['type'], $data);

                $form->addField(
                    $fieldInstance->toFormField($this->app)
                        ->setName($fieldInstance->getLabel())
                        ->label($fieldInstance->getLabel())
                )
                    ->required((bool) $data->required)
                    ->set('text', (string) $data->description)
                    ->setAttribute('id', 'input-' . $data->uid)
                    ->set('uid', $data->uid);

                return $fieldInstance;
            }
        );

        $captcha = (bool) ($item->getParams()['captcha'] ?? false);

        if ($captcha) {
            $form->add('captcha', CaptchaField::class)
                ->autoValidate(true)
                ->jsVerify(true);
        }

        return [$item, $fields, $form];
    }

    public function getForm(int|Formkit $id, array $options = []): Form
    {
        return $this->getFormkitMeta($id, $options)[2];
    }

    /**
     * @param  int|Formkit  $id
     * @param  array        $options
     *
     * @return  Collection<AbstractField>
     *
     */
    public function getFields(int|Formkit $id, array $options = []): Collection
    {
        return $this->getFormkitMeta($id, $options)[1];
    }

    public function checkAvailable(Formkit $item): void
    {
        // Check published
        if (!$item->getState()->isPublished()) {
            throw new FormkitUnpublishedException('Not enabled');
        }

        $up = $item->getPublishUp();
        $down = $item->getPublishDown();

        if ($up !== null && $up->isFuture()) {
            throw new FormkitUnpublishedException('Formkit not publish up yet');
        }

        if ($down !== null && $down->isPast()) {
            throw new FormkitUnpublishedException('Formkit end publish');
        }
    }

    public function isAvailable(Formkit $item): bool
    {
        try {
            $this->checkAvailable($item);
        } catch (FormkitUnpublishedException) {
            return false;
        }

        return true;
    }

    public function parseShortCode(string $html): string
    {
        return $this->createShortCodeProcessor()->process($html);
    }

    public function createShortCodeProcessor(): ShortcodeFacade
    {
        $shortcode = new ShortcodeFacade();

        $shortcode->addHandler(
            'formkit',
            function (ShortcodeInterface $shortcode) {
                $params = $shortcode->getParameters();
                $id = $params['id'];
                $alias = $params['alias'];

                if ($id) {
                    $item = $this->orm->findOne(Formkit::class, $id);
                } elseif ($alias) {
                    $item = $this->orm->findOne(Formkit::class, compact('alias'));
                } else {
                    return '';
                }

                if (!$item) {
                    return '';
                }

                return $this->render($item, $params);
            }
        );

        $shortcode->addEventHandler(Events::REPLACE_SHORTCODES, $this->replaceArounds(...));

        return $shortcode;
    }

    protected function replaceArounds(ReplaceShortcodesEvent $event): void
    {
        $event->setResult(
            array_reduce(
                array_reverse($event->getReplacements()),
                static function ($fullText, ReplacedShortcode $r) {
                    $offset = $r->getOffset();
                    $length = mb_strlen($r->getText());

                    $prefix = mb_substr($fullText, 0, $offset);
                    $postfix = mb_substr($fullText, $offset + $length);

                    $prefix = Str::removeRight(rtrim($prefix), '<p>');
                    $postfix = Str::removeLeft(ltrim($postfix), '</p>');

                    return $prefix . $r->getReplacement() . $postfix;
                },
                $event->getText()
            )
        );
    }

    public function createReceiverMailMessage(Formkit $item, FormkitResponse $res, ?string $subject = null, ?string $layout = null): MailMessage
    {
        $subject ??= sprintf(
            '[表單提交 #%s] %s - %s',
            $res->getId(),
            $item->getTitle(),
            now('Y-m-d H:i:s')
        );

        $mailer = $this->app->retrieve(MailerInterface::class);

        $message = $mailer->createMessage($subject)
            ->renderBody(
                $layout ?? 'mail.formkit-receiver-mail',
                [
                    'item' => $item,
                    'res' => $res,
                ]
            );

        $receivers = (array) $this->formkit->config('receivers');

        foreach ($receivers['cc'] ?? [] as $address) {
            $message->cc($address);
        }

        foreach ($receivers['bcc'] ?? [] as $address) {
            $message->bcc($address);
        }

        return $message;
    }
}
