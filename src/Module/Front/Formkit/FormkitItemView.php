<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit\Module\Front\Formkit;

use Lyrasoft\Formkit\Entity\Formkit;
use Lyrasoft\Formkit\Formkit\FormkitService;
use Lyrasoft\Formkit\Repository\FormkitRepository;
use Lyrasoft\Luna\PageBuilder\PageService;
use Windwalker\Core\Application\AppContext;
use Windwalker\Core\Attributes\ViewMetadata;
use Windwalker\Core\Attributes\ViewModel;
use Windwalker\Core\Html\HtmlFrame;
use Windwalker\Core\Router\Exception\RouteNotFoundException;
use Windwalker\Core\View\View;
use Windwalker\Core\View\ViewModelInterface;
use Windwalker\DI\Attributes\Autowire;
use Windwalker\ORM\ORM;

#[ViewModel(
    layout: 'formkit-item',
    js: 'formkit-item.js'
)]
class FormkitItemView implements ViewModelInterface
{
    public function __construct(
        protected ORM $orm,
        protected FormkitService $formkitService,
        protected PageService $pageService,
        #[Autowire] protected FormkitRepository $repository
    ) {
        //
    }

    /**
     * Prepare View.
     *
     * @param  AppContext  $app   The web app context.
     * @param  View        $view  The view object.
     *
     * @return  mixed
     */
    public function prepare(AppContext $app, View $view): array
    {
        $alias = $app->input('alias');
        $s = (string) $app->input('s');

        /** @var Formkit $item */
        $item = $this->repository->mustGetItem(compact('alias'));

        if (!$this->pageService->secretVerify($item->getId(), $s)) {
            $this->formkitService->checkAvailable($item);

            if (!$item->isPublic()) {
                throw new RouteNotFoundException('Not public');
            }
        }

        $view[$item::class] = $item;

        return compact('item');
    }

    #[ViewMetadata]
    public function prepareMetadata(HtmlFrame $htmlFrame, Formkit $item): void
    {
        $htmlFrame->setTitle($item->getTitle());
    }
}
