<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit\Formkit;

use Lyrasoft\Formkit\Entity\Formkit;
use Lyrasoft\Formkit\Formkit\Type\AbstractFormType;
use Windwalker\Data\Collection;
use Windwalker\Form\Form;
use Windwalker\Utilities\Options\RecordOptionsTrait;

class FormkitOptions
{
    use RecordOptionsTrait;

    public function __construct(
        public string $namespace = 'formkit',
        public bool $force = false,
        public ?string $id = null,
        public mixed $return = null,
        public array $data = [],
        /**
         * @var \Closure(Formkit $item, Form $form, Collection<AbstractFormType> $fields): void|null
         */
        public ?\Closure $afterPrepared = null,
    ) {
    }
}
