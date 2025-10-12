<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit\Formkit\Type;

use Windwalker\Core\Language\TranslatorTrait;
use Windwalker\DOM\HTMLElement;
use Windwalker\Form\Field\ListField;

use function Windwalker\DOM\h;
use function Windwalker\uid;

trait ListFormkitTrait
{
    use TranslatorTrait;

    public function getOptions(): array
    {
        return (array) $this->getData()->options;
    }

    public function hasOther(): bool
    {
        return (bool) $this->data->enable_other;
    }

    protected function getOtherOption(ListField $field): void
    {
        $field->option(
            $this->getOptionText($field),
            '其他',
            ['id' => uid('option'), 'class' => 'c-other-option']
        );
    }

    public function getOptionText(ListField $field): HTMLElement
    {
        return h(
            'div',
            ['class' => 'd-flex'],
            [
                h('div', ['class' => 'me-2 text-nowrap'], '其他'),
                $this->getOtherInput($field),
            ]
        );
    }

    public function getOtherInput(ListField $field): HTMLElement
    {
        $newField = clone $field;

        return h('input', [
            'class' => 'c-other-input form-control js-other-text',
            'name' => $newField->setName($field->getName() . '_other')->getInputName(),
            'style' => 'display: none',
            'placeholder' => '輸入其它'
        ]);
    }
}
