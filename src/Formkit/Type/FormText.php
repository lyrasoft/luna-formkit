<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit\Formkit\Type;

use Windwalker\Core\Application\ServiceAwareInterface;
use Windwalker\Form\Field\AbstractField;
use Windwalker\Form\Field\EmailField;
use Windwalker\Form\Field\NumberField;
use Windwalker\Form\Field\TelField;
use Windwalker\Form\Field\TextField;
use Windwalker\Form\Field\UrlField;
use Windwalker\Utilities\Contract\LanguageInterface;

/**
 * The FormsetText class.
 *
 * @since  __DEPLOY_VERSION__
 */
class FormText extends AbstractFormType
{
    /**
     * getIcon
     *
     * @return  string
     *
     * @since  __DEPLOY_VERSION__
     */
    public static function getIcon(): string
    {
        return 'far fa-text';
    }

    /**
     * getName
     *
     * @return  string
     *
     * @since  __DEPLOY_VERSION__
     */
    public static function getTitle(): string
    {
        return '文字欄位';
    }

    public static function getGroup(LanguageInterface $lang): string
    {
        return '文字輸入';
    }

    /**
     * getName
     *
     * @return  string
     *
     * @since  __DEPLOY_VERSION__
     */
    public static function getId(): string
    {
        return 'text';
    }

    /**
     * getDescription
     *
     * @return  string
     *
     * @since  __DEPLOY_VERSION__
     */
    public static function getDescription(): string
    {
        return '單行文字欄位';
    }

    /**
     * getDefaultParams
     *
     * @return  array
     *
     * @since  __DEPLOY_VERSION__
     */
    public static function getDefaultParams(): array
    {
        return array_merge(
            parent::getDefaultParams(),
            [
                'subtype' => 'text',
                'placeholder' => '請填寫此欄位',
                'pattern' => '',
            ]
        );
    }

    public function toFormField(ServiceAwareInterface $app): AbstractField
    {
        $field = match ($this->data->subtype) {
            'email' => $app->make(EmailField::class),
            'number' => $app->make(NumberField::class),
            'url' => $app->make(UrlField::class),
            'tel' => $app->make(TelField::class),
            default => $app->make(TextField::class),
        };

        return $field->label($this->getLabel())
            ->setName($this->getLabel())
            ->placeholder((string) $this->data->placeholder);
    }
}
