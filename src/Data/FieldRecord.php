<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit\Data;

use Windwalker\Data\RecordTrait;

#[\AllowDynamicProperties]
class FieldRecord
{
    use RecordTrait;

    public function __construct(
        public string $uid,
        public string $help,
        public string $type,
        public string $class,
        public string $label,
        public string $subtype,
        public bool $disabled,
        public bool $readonly,
        public string|bool $required,
        public string $validation,
        public string $description,
        public string $placeholder,
    ) {
    }
}
