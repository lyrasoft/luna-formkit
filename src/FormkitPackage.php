<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit;

use Lyrasoft\Formkit\Component\PublishingDropdownComponent;
use Lyrasoft\Formkit\Formkit\FormkitService;
use Windwalker\Core\Package\AbstractPackage;
use Windwalker\Core\Package\PackageInstaller;
use Windwalker\Core\Renderer\RendererService;
use Windwalker\Core\Runtime\Config;
use Windwalker\Data\Collection;
use Windwalker\DI\Container;
use Windwalker\DI\ServiceProviderInterface;
use Windwalker\Utilities\Contract\LanguageInterface;
use Windwalker\Utilities\Iterator\PriorityQueue;
use Windwalker\Utilities\StrNormalize;

class FormkitPackage extends AbstractPackage implements ServiceProviderInterface
{
    public function __construct(protected Config $config)
    {
    }

    public function register(Container $container): void
    {
        $container->share(static::class, $this);
        $container->prepareSharedObject(FormkitService::class);

        $container->mergeParameters(
            'renderer.edge.components',
            [
                'publishing-dropdown' => PublishingDropdownComponent::class,
            ]
        );

        $container->extend(RendererService::class, function (RendererService $rendererService) {
            $rendererService->addPath(static::path('views'), PriorityQueue::BELOW_NORMAL);
        });
    }

    public function config(string $path, string $delimiter = '.', int $depth = 0): mixed
    {
        return $this->getConfig()->getDeep($path, $delimiter, $depth);
    }

    public function getConfig(): Collection
    {
        return $this->config->extract('formkit');
    }

    public function getDefaultExtends(): string
    {
        return $this->config('view.default_extends');
    }

    public function getExtendsOptions(LanguageInterface $lang): array
    {
        $extends = $this->config('view.extends');

        $options = [];

        foreach ($extends as $key => $value) {
            if (is_numeric($key)) {
                $options[$key] = $key;
            } else {
                $text = $value;

                if ($lang->has($value)) {
                    $text = $lang->trans($value);
                }

                $options[$key] = $text;
            }
        }

        return $options;
    }

    public function install(PackageInstaller $installer): void
    {
        $installer->installConfig(static::path('etc/*.php'), 'config');
        $installer->installLanguages(static::path('resources/languages/**/*.ini'), 'lang');
        $installer->installMigrations(static::path('resources/migrations/**/*'), 'migrations');
        $installer->installSeeders(static::path('resources/seeders/**/*'), 'seeders');
        $installer->installRoutes(static::path('routes/**/*.php'), 'routes');
        $installer->installViews(static::path('views/*.blade.php'), 'views');

        $this->installModules($installer, 'formkit');
        $this->installModules($installer, 'formkit_response', ['admin', 'model']);
    }

    protected function installModules(
        PackageInstaller $installer,
        string $name,
        array $modules = ['front', 'admin', 'model']
    ): void {
        $pascal = StrNormalize::toPascalCase($name);

        if (in_array('admin', $modules, true)) {
            $installer->installModules(
                [
                    static::path("src/Module/Admin/$pascal/**/*") => "@source/Module/Admin/$pascal",
                ],
                ['Lyrasoft\\Formkit\\Module\\Admin' => 'App\\Module\\Admin'],
                ['modules', $name . '_admin'],
            );
        }

        if (in_array('front', $modules, true)) {
            $installer->installModules(
                [
                    static::path("src/Module/Front/$pascal/**/*") => "@source/Module/Front/$pascal",
                ],
                ['Lyrasoft\\Formkit\\Module\\Front' => 'App\\Module\\Front'],
                ['modules', $name . '_front']
            );
        }

        if (in_array('model', $modules, true)) {
            $installer->installModules(
                [
                    static::path("src/Entity/$pascal.php") => '@source/Entity',
                    static::path("src/Repository/{$pascal}Repository.php") => '@source/Repository',
                ],
                [
                    'Lyrasoft\\Formkit\\Entity' => 'App\\Entity',
                    'Lyrasoft\\Formkit\\Repository' => 'App\\Repository',
                ],
                ['modules', $name . '_model']
            );
        }
    }
}
