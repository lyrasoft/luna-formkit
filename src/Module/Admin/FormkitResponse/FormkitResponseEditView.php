<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit\Module\Admin\FormkitResponse;

use Lyrasoft\Formkit\Module\Admin\FormkitResponse\Form\EditForm;
use Lyrasoft\Formkit\Entity\FormkitResponse;
use Lyrasoft\Formkit\Repository\FormkitResponseRepository;
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
    layout: 'formkit-response-edit',
    js: 'formkit-response-edit.js'
)]
class FormkitResponseEditView implements ViewModelInterface
{
    use TranslatorTrait;
    use ORMAwareViewModelTrait;
    use FormAwareViewModelTrait;

    public function __construct(
        #[Autowire] protected FormkitResponseRepository $repository,
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
        $item = $this->repository->getItem($id);

        // Bind item for injection
        $view[FormkitResponse::class] = $item;

        $form = $this->createForm(EditForm::class)
            ->fill(
                [
                    'item' => $this->repository->getState()->getAndForget('edit.data')
                        ?: $this->orm->extractEntity($item)
                ]
            );

        return compact('form', 'id', 'item');
    }

    #[ViewMetadata]
    protected function prepareMetadata(HtmlFrame $htmlFrame): void
    {
        $htmlFrame->setTitle(
            $this->trans('unicorn.title.edit', title: 'FormkitResponse')
        );
    }
}
