<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit\Module\Admin\FormkitResponse;

use Lyrasoft\Formkit\Entity\Formkit;
use Lyrasoft\Formkit\Entity\FormkitResponse;
use Lyrasoft\Formkit\Formkit\FormkitService;
use Lyrasoft\Formkit\Formkit\Type\AbstractFormType;
use Lyrasoft\Formkit\Module\Admin\FormkitResponse\Form\GridForm;
use Lyrasoft\Formkit\Repository\FormkitResponseRepository;
use Lyrasoft\Formkit\Service\FormkitExportService;
use Lyrasoft\Luna\User\UserService;
use Lyrasoft\Toolkit\Spreadsheet\PhpSpreadsheetWriter;
use Lyrasoft\Toolkit\Spreadsheet\SpreadsheetKit;
use Unicorn\Selector\ListSelector;
use Unicorn\View\FormAwareViewModelTrait;
use Unicorn\View\ORMAwareViewModelTrait;
use Windwalker\Core\Application\AppContext;
use Windwalker\Core\Attributes\ViewMetadata;
use Windwalker\Core\Attributes\ViewModel;
use Windwalker\Core\DateTime\ChronosService;
use Windwalker\Core\Html\HtmlFrame;
use Windwalker\Core\Language\TranslatorTrait;
use Windwalker\Core\View\Contract\FilterAwareViewModelInterface;
use Windwalker\Core\View\Traits\FilterAwareViewModelTrait;
use Windwalker\Core\View\View;
use Windwalker\Core\View\ViewModelInterface;
use Windwalker\Data\Collection;
use Windwalker\DI\Attributes\Autowire;

use Windwalker\Http\Response\AttachmentResponse;

use function Windwalker\now;

/**
 * The FormkitResponseListView class.
 */
#[ViewModel(
    layout: [
        'default' => 'formkit-response-list',
        'modal' => 'formkit-response-modal',
    ],
    js: 'formkit-response-list.js'
)]
class FormkitResponseListView implements ViewModelInterface, FilterAwareViewModelInterface
{
    use TranslatorTrait;
    use FilterAwareViewModelTrait;
    use ORMAwareViewModelTrait;
    use FormAwareViewModelTrait;

    public function __construct(
        #[Autowire]
        protected FormkitResponseRepository $repository,
        protected FormkitService $formkitService,
    ) {
    }

    /**
     * Prepare view data.
     *
     * @param  AppContext  $app  The request app context.
     * @param  View        $view  The view object.
     *
     * @return  array
     */
    public function prepare(AppContext $app, View $view): mixed
    {
        $formkitId = (int) $app->input('formkit_id');
        $state = $this->repository->getState();

        // Prepare Items
        $page = $state->rememberFromRequest('page');
        $limit = $state->rememberFromRequest('limit') ?? 30;
        $filter = (array) $state->rememberFromRequest('filter');
        $search = (array) $state->rememberFromRequest('search');
        $ordering = $state->rememberFromRequest('list_ordering') ?? $this->getDefaultOrdering();

        $items = $this->repository->getListSelector()
            ->setFilters($filter)
            ->searchTextFor(
                $search['*'] ?? '',
                $this->getSearchFields()
            )
            ->where('formkit_response.formkit_id', $formkitId)
            ->ordering($ordering)
            ->page($page)
            ->limit($limit)
            ->setDefaultItemClass(FormkitResponse::class);

        // Fields
        [$formkit, $fields] = $this->formkitService->getFormkitMeta($formkitId);

        $view[Formkit::class] = $formkit;

        if ($app->input('export')) {
            return $app->call($this->export(...), compact('formkit', 'items', 'fields'));
        }

        $pagination = $items->getPagination();

        // Prepare Form
        $form = $this->createForm(GridForm::class)
            ->fill(compact('search', 'filter'));

        $showFilters = $this->isFiltered($filter);

        $previewFields = $fields->filter(
            function (AbstractFormType $field) {
                return (bool) $field->getData()->grid_preview;
            }
        );

        return compact(
            'items',
            'pagination',
            'form',
            'showFilters',
            'ordering',
            'formkit',
            'previewFields',
        );
    }

    /**
     * Get default ordering.
     *
     * @return  string
     */
    public function getDefaultOrdering(): string
    {
        return 'formkit_response.id DESC';
    }

    /**
     * Get search fields.
     *
     * @return  string[]
     */
    public function getSearchFields(): array
    {
        return [
            'formkit_response.id',
            'formkit_response.content',
            'formkit_response.ip',
        ];
    }

    #[ViewMetadata]
    protected function prepareMetadata(HtmlFrame $htmlFrame, Formkit $formkit): void
    {
        $htmlFrame->setTitle(
            '觀看提交: ' . $formkit->getTitle()
        );
    }

    public function export(
        FormkitExportService $formkitExportService,
        Formkit $formkit,
        ListSelector $items,
        Collection $fields,
    ): AttachmentResponse {
        return $formkitExportService->export($formkit, $items, $fields);
    }
}
