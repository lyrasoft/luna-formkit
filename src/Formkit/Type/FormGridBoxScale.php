<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit\Formkit\Type;

use Lyrasoft\Formkit\Entity\Formkit;
use Windwalker\Core\Application\Context\AppRequestInterface;
use Windwalker\Core\Http\AppRequest;
use Windwalker\IO\Input;
use Windwalker\Utilities\Arr;
use Windwalker\Utilities\Contract\LanguageInterface;

/**
 * The FormsetText class.
 *
 * @since  __DEPLOY_VERSION__
 */
class FormGridBoxScale extends FormGridRadioScale
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
        return 'far fa-grip-horizontal';
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
        return '矩陣勾選量表';
    }

    public static function getGroup(LanguageInterface $lang): string
    {
        return '量表';
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
        return 'grid-box-scale';
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
        return '矩陣勾選量表';
    }

    public function prepareViewLabels(): array
    {
        $labels = [];

        foreach ($this->data->rows as $i => $row) {
            $labels[] = $this->getLabel() . '_' . $row['text'];
        }

        return $labels;
    }

    public function prepareViewData(array $content): array
    {
        $data = [];

        foreach ($this->data->rows as $i => $row) {
            $selected = $content[$this->getLabel()][$row['text']] ?? [];

            $selected = array_map(
                fn ($item) => "<li>$item</li>",
                $selected
            );

            $data[] = '<ul>' . implode('', $selected) . '</ul>';
        }

        return $data;
    }

    public function prepareExportLabels(): array
    {
        $labels = [];

        foreach ($this->data->rows as $i => $row) {
            $label = $this->getLabel() . '_' . $row['text'];

            foreach ($this->data->columns as $c => $column) {
                $colLabel = $label . '_' . $column['text'];

                $labels[$colLabel] = $colLabel;
            }
        }

        return $labels;
    }

    public function prepareExportData(array $content): array
    {
        $data = [];

        foreach ($this->data->rows as $i => $row) {
            $label = $this->getLabel() . '_' . $row['text'];

            $values = $content[$this->getLabel()][$row['text']] ?? [];

            foreach ($this->data->columns as $c => $column) {
                $colLabel = $label . '_' . $column['text'];

                $data[$colLabel] = (int) in_array($column['text'], $values);
            }
        }

        return $data;
    }
}
