<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit\Workflow;

use Lyrasoft\Formkit\Enum\ResState;
use Unicorn\Attributes\StateMachine;
use Unicorn\Workflow\WorkflowController;
use Unicorn\Workflow\WorkflowInterface;
use Unicorn\Workflow\WorkflowTrait;

#[StateMachine(
    field: 'state',
    enum: ResState::class,
    strict: false
)]
class ResponseWorkflow implements WorkflowInterface
{
    use WorkflowTrait;

    public function prepare(WorkflowController $workflow, ?object $entity): void
    {
        //
    }
}
