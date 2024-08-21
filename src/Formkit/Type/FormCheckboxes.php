<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit\Formkit\Type;

use Lyrasoft\Formkit\Entity\Formkit;
use Windwalker\Core\Application\Context\AppRequestInterface;
use Windwalker\Core\Application\ServiceAwareInterface;
use Windwalker\Core\Http\AppRequest;
use Windwalker\Form\Field\AbstractField;
use Windwalker\Form\Field\CheckboxesField;
use Windwalker\IO\Input;
use Windwalker\Utilities\Arr;
use Windwalker\Utilities\Contract\LanguageInterface;

use function Windwalker\collect;
use function Windwalker\h;
use function Windwalker\uid;

/**
 * The FormsetText class.
 *
 * @since  __DEPLOY_VERSION__
 */
class FormCheckboxes extends FormSelect
{
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
        return 'far fa-check-square';
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
        return '勾選方塊';
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
        return 'checkboxes';
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
        return '多選核取方塊';
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
                //
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
        return $app->make(CheckboxesField::class)
            ->label($this->getLabel())
            ->setName($this->getLabel())
            ->register(function (CheckboxesField $field) {
                foreach ($this->data->options as $opt) {
                    $field->option($opt['text'], $opt['text'], ['id' => uid('option', true)]);
                }
            });
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
        $options = collect();

        $selected = (array) ($content[$this->getLabel()] ?? []);

        $options[] = '<ul>';

        foreach ($selected as $item) {
            $options[] = "<li>{$item}</li>";
        }

        $options[] = '</ul>';

        $otherLabel = $this->getLabel() . '_other';

        $data[$this->getLabel()] = (string) $options->implode('');
        $data['其他'] = $content[$otherLabel] ?? '';

        return $data;
    }

    public function prepareExportLabels(): array
    {
        $options = $this->getOptions();

        $labels = [];

        foreach ($options as $option) {
            $label = $this->getLabel() . '_' . $option['text'];

            $labels[$label] = $label;
        }

        if ($this->hasOther()) {
            $labels[$this->getLabel() . '_other'] = $this->getLabel() . '_其他欄位';
        }

        return $labels;
    }

    public function prepareExportData(array $content): array
    {
        $options = $this->getOptions();

        $data = [];

        $values = (array) ($content[$this->getLabel()] ?? []);

        foreach ($options as $option) {
            $label = $this->getLabel() . '_' . $option['text'];

            $data[$label] = (int) in_array($option['text'], $values);
        }

        if ($this->hasOther()) {
            $data[$this->getLabel() . '_other'] = $content[$this->getLabel() . '_other'] ?? '';
        }

        return $data;
    }
}
