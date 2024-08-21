<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit\Formkit\Type;

use Lyrasoft\Formkit\Entity\Formkit;
use Windwalker\Core\Application\AppContext;
use Windwalker\Core\Application\Context\AppRequestInterface;
use Windwalker\Core\Application\ServiceAwareInterface;
use Windwalker\Core\Asset\AssetService;
use Windwalker\Core\Http\AppRequest;
use Windwalker\Data\Collection;
use Windwalker\Form\Field\AbstractField;
use Windwalker\Form\Field\TextField;
use Windwalker\Utilities\Contract\LanguageInterface;

use Windwalker\Utilities\TypeCast;

use function Windwalker\collect;

abstract class AbstractFormType
{
    protected Collection $data;

    abstract public static function getTitle(): string;

    abstract public static function getId(): string;

    abstract public static function getIcon(): string;

    abstract public static function getDescription(): string;

    public static function getGroup(LanguageInterface $lang): string
    {
        return '';
    }

    public function getLabel(): string
    {
        return $this->data->label;
    }

    public function toFormField(ServiceAwareInterface $app): AbstractField
    {
        return $app->make(TextField::class)
            ->label($this->getLabel())
            ->setName($this->getLabel())
            ->placeholder((string) $this->data->placeholder);
    }

    public function prepareStore(AppRequest $request, Formkit $formkit, array $data, string $ns): array
    {
        return $data;
    }

    public function prepareViewLabels(): array
    {
        return [
            $this->getLabel()
        ];
    }

    public function prepareViewData(array $content): array
    {
        $data[$this->getLabel()] = $content[$this->getLabel()] ?? '';

        return $data;
    }

    public function prepareExportLabels(): array
    {
        return [
            $this->getLabel() => $this->getLabel()
        ];
    }

    public function prepareExportData(array $content): array
    {
        $data[$this->getLabel()] = $content[$this->getLabel()] ?? '';

        return $data;
    }

    public static function getDefaultParams(): array
    {
        return [
            'type' => static::getId(),
            'label' => '',
            'description' => '',
            'help' => '',
            'required' => '',
            'validation' => '',
            'readonly' => false,
            'disabled' => false,
            'class' => '',
            'grid_preview' => '0'
        ];
    }

    public function getData(): Collection
    {
        return $this->data;
    }

    public function setData(mixed $data): static
    {
        $this->data = collect($data);

        return $this;
    }

    public static function getTypeMeta(AppContext $app, AssetService $asset, LanguageInterface $lang): array
    {
        return [
            'id' => static::getId(),
            'title' => static::getTitle($lang),
            'group' => static::getGroup($lang),
            'icon' => static::getIcon(),
            'params' => static::getDefaultParams(),
            'description' => static::getDescription($lang),
            'componentName' => static::getVueComponentName(),
            'componentModuleUrl' => static::loadVueComponent($app, $asset),
        ];
    }

    public static function getVueComponentName(): string
    {
        return 'form-' . static::getId();
    }

    public static function loadVueComponent(AppContext $app, AssetService $asset): ?string
    {
        return $asset->path('vendor/lyrasoft/formkit/dist/fields/form-' . static::getId() . '.js');
    }
}
