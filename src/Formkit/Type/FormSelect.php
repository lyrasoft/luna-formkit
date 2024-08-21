<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit\Formkit\Type;

use Windwalker\Core\Application\ServiceAwareInterface;
use Windwalker\Core\Language\TranslatorTrait;
use Windwalker\Form\Field\AbstractField;
use Windwalker\Form\Field\ListField;
use Windwalker\Utilities\Contract\LanguageInterface;

use function Windwalker\collect;
use function Windwalker\uid;

class FormSelect extends AbstractFormType
{
    use TranslatorTrait;
    use ListFormkitTrait;

    /**
     * getIcon
     *
     * @return  string
     *
     * @since  __DEPLOY_VERSION__
     */
    public static function getIcon(): string
    {
        return 'far fa-list';
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
        return '下拉選單';
    }

    public static function getGroup(LanguageInterface $lang): string
    {
        return '選擇';
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
        return 'select';
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
        return '下拉式選單';
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
                'options' => [],
                'enable_other' => '0',
            ]
        );
    }

    /**
     * getFormField
     *
     * @param  ServiceAwareInterface  $app  *
     *
     * @return  AbstractField
     *
     * @since  __DEPLOY_VERSION__
     */
    public function toFormField(ServiceAwareInterface $app): AbstractField
    {
        return (new ListField($this->getLabel(), $this->getLabel()))
            ->register(
                function (ListField $field) {
                    $field->option(
                        '- 請選擇 -',
                        ''
                    );

                    foreach ($this->data->options as $opt) {
                        $field->option($opt['text'], $opt['text'], ['id' => uid('option')]);
                    }
                }
            );
    }

    public function prepareViewLabels(): array
    {
        $labels = [$this->getLabel()];

        if ($this->getData()->enable_other) {
            $labels[] = $this->getLabel() . ': 其他';
        }

        return $labels;
    }

    public function prepareViewData(array $content): array
    {
        $data = [];
        $data[] = $content[$this->getLabel()] ?? '';

        if ($this->getData()->enable_other) {
            $otherLabel = $this->getLabel() . '_other';
            $data[] = $content[$otherLabel] ?? '';
        }

        return $data;
    }
}
