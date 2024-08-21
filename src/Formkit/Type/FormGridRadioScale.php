<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit\Formkit\Type;

use Windwalker\Core\Application\Context\AppRequestInterface;
use Windwalker\Core\Http\AppRequest;
use Windwalker\Utilities\Arr;
use Windwalker\Utilities\Contract\LanguageInterface;

/**
 * The FormsetText class.
 *
 * @since  __DEPLOY_VERSION__
 */
class FormGridRadioScale extends AbstractFormType
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
        return 'far fa-braille';
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
        return '矩陣單選量表';
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
        return 'grid-radio-scale';
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
        return '矩陣單選量表';
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
                'rows' => [],
                'columns' => []
            ]
        );
    }

    /**
     * prepareStore
     *
     * @param array        $data
     * @param  AppRequest  $request
     * @param string       $ns
     *
     * @return  array
     *
     * @since  __DEPLOY_VERSION__
     */
    public function prepareStore(array $data, AppRequest $request, string $ns): array
    {
        $new = Arr::flatten(
            [
                $this->getLabel() => $data[$this->getLabel()] ?? []
            ],
            '_'
        );

        $data = array_merge($data, $new);

        unset($data[$this->getLabel()]);

        return $data;
    }

    public function prepareViewLabels(): array
    {
        $labels = [];

        foreach ($this->data->rows as $i => $row) {
            $labels[] = $this->getLabel() . ': ' . $row['text'];
        }

        return $labels;
    }

    public function prepareViewData(array $content): array
    {
        $data = [];

        foreach ($this->data->rows as $i => $row) {
            $data[] = $content[$this->getLabel()][$row['text']] ?? '';
        }

        return $data;
    }

    public function prepareExportLabels(): array
    {
        $labels = [];

        foreach ($this->data->rows as $i => $row) {
            $label = $this->getLabel() . '_' . $row['text'];

            $labels[$label] = $label;
        }

        return $labels;
    }

    public function prepareExportData(array $content): array
    {
        $data = [];

        foreach ($this->data->rows as $i => $row) {
            $label = $this->getLabel() . '_' . $row['text'];

            $value = $content[$this->getLabel()][$row['text']] ?? '';

            $data[$label] = $value;
        }

        return $data;
    }
}
