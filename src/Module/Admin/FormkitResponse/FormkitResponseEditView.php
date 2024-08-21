<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit\Module\Admin\FormkitResponse;

use Lyrasoft\Formkit\Entity\Formkit;
use Lyrasoft\Formkit\Module\Admin\FormkitResponse\Form\EditForm;
use Lyrasoft\Formkit\Entity\FormkitResponse;
use Lyrasoft\Formkit\Repository\FormkitResponseRepository;
use Lyrasoft\Luna\User\UserService;
use Unicorn\View\FormAwareViewModelTrait;
use Unicorn\View\ORMAwareViewModelTrait;
use Windwalker\Core\Application\AppContext;
use Windwalker\Core\Attributes\ViewMetadata;
use Windwalker\Core\Attributes\ViewModel;
use Windwalker\Core\Html\HtmlFrame;
use Windwalker\Core\Language\TranslatorTrait;
use Windwalker\Core\View\View;
use Windwalker\Core\View\ViewModelInterface;
use Windwalker\DI\Attributes\Autowire;

/**
 * The FormkitResponseEditView class.
 */
#[ViewModel(
    layout: 'formkit-response-preview',
    js: 'formkit-response-edit.js'
)]
class FormkitResponseEditView implements ViewModelInterface
{
    use TranslatorTrait;
    use ORMAwareViewModelTrait;
    use FormAwareViewModelTrait;

    public function __construct(
        #[Autowire] protected FormkitResponseRepository $repository,
        #[Autowire] protected UserService $userService
    ) {
    }

    /**
     * Prepare
     *
     * @param  AppContext  $app
     * @param  View        $view
     *
     * @return  mixed
     */
    public function prepare(AppContext $app, View $view): mixed
    {
        $id = $app->input('id');

        /** @var FormkitResponse $item */
        $item = $this->repository->mustGetItem($id);

        $formkit = $this->orm->mustFindOne(Formkit::class, $item->getFormkitId());

        // Bind item for injection
        $view[FormkitResponse::class] = $item;

        // $form = $this->createForm(EditForm::class)
        //     ->fill(
        //         [
        //             'item' => $this->repository->getState()->getAndForget('edit.data')
        //                 ?: $this->orm->extractEntity($item)
        //         ]
        //     );

        $user = $this->userService->load(['id' => $item->getCreatedBy()]);

        return compact('formkit', 'id', 'item', 'user');
    }

    #[ViewMetadata]
    protected function prepareMetadata(HtmlFrame $htmlFrame): void
    {
        $htmlFrame->setTitle(
            $this->trans('unicorn.title.edit', title: '填答')
        );
    }
}
