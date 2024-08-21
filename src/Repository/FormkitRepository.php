<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit\Repository;

use Lyrasoft\Formkit\Entity\Formkit;
use Lyrasoft\Formkit\Entity\FormkitResponse;
use Lyrasoft\Luna\Entity\User;
use Unicorn\Attributes\ConfigureAction;
use Unicorn\Attributes\Repository;
use Unicorn\Repository\Actions\BatchAction;
use Unicorn\Repository\Actions\ReorderAction;
use Unicorn\Repository\Actions\SaveAction;
use Unicorn\Repository\ListRepositoryInterface;
use Unicorn\Repository\ListRepositoryTrait;
use Unicorn\Repository\ManageRepositoryInterface;
use Unicorn\Repository\ManageRepositoryTrait;
use Unicorn\Selector\ListSelector;
use Windwalker\ORM\SelectorQuery;
use Windwalker\Query\Query;

#[Repository(entityClass: Formkit::class)]
class FormkitRepository implements ManageRepositoryInterface, ListRepositoryInterface
{
    use ManageRepositoryTrait;
    use ListRepositoryTrait;

    public function getListSelector(): ListSelector
    {
        $selector = $this->createSelector()
            ->selectRaw('IFNULL(res_count.count, 0) AS res_count')
            ->leftJoin(
                fn(Query $query) => $query->selectRaw('COUNT(*) AS count')
                    ->select('formkit_id')
                    ->from(FormkitResponse::class)
                    ->group('formkit_id'),
                'res_count',
                'res_count.formkit_id',
                'formkit.id'
            )
            ->leftJoin(
                User::class,
                'submitter',
                'submitter.id',
                'formkit.created_by'
            );

        $selector->from(Formkit::class);

        return $selector;
    }

    #[ConfigureAction(SaveAction::class)]
    protected function configureSaveAction(SaveAction $action): void
    {
        //
    }

    #[ConfigureAction(ReorderAction::class)]
    protected function configureReorderAction(ReorderAction $action): void
    {
        //
    }

    #[ConfigureAction(BatchAction::class)]
    protected function configureBatchAction(BatchAction $action): void
    {
        //
    }
}
