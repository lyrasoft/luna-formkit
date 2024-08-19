<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit\Enum;

use Windwalker\Utilities\Contract\LanguageInterface;
use Windwalker\Utilities\Enum\EnumTranslatableInterface;
use Windwalker\Utilities\Enum\EnumTranslatableTrait;

enum ResState: string implements EnumTranslatableInterface
{
    use EnumTranslatableTrait;

    case PENDING = 'pending';

    case PROCESSING = 'processing';

    case DONE = 'done';

    case CANCELLED = 'cancelled';

    public function trans(LanguageInterface $lang, ...$args): string
    {
        return $lang->trans('formket.res.state.' . $this->getKey());
    }
}
