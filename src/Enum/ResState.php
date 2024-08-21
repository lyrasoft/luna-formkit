<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit\Enum;

use Windwalker\Utilities\Attributes\Enum\Color;
use Windwalker\Utilities\Attributes\Enum\Icon;
use Windwalker\Utilities\Attributes\Enum\Title;
use Windwalker\Utilities\Contract\LanguageInterface;
use Windwalker\Utilities\Enum\EnumTranslatableInterface;
use Windwalker\Utilities\Enum\EnumTranslatableTrait;

enum ResState: string implements EnumTranslatableInterface
{
    use EnumTranslatableTrait;

    #[Title('待處理')]
    #[Color('warning')]
    #[Icon('fal fa-clock')]
    case PENDING = 'pending';

    #[Title('處理中')]
    #[Color('info')]
    #[Icon('fal fa-exchange-alt')]
    case PROCESSING = 'processing';

    #[Title('完成')]
    #[Color('success')]
    #[Icon('fal fa-check')]
    case DONE = 'done';

    #[Title('取消')]
    #[Color('secondary')]
    #[Icon('fal fa-xmark')]
    case CANCELLED = 'cancelled';

    public function trans(LanguageInterface $lang, ...$args): string
    {
        return $lang->trans('formket.res.state.' . $this->getKey());
    }
}
