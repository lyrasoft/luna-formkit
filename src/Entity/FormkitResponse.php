<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit\Entity;

use Lyrasoft\Formkit\Enum\ResState;
use Lyrasoft\Luna\Attributes\Author;
use Lyrasoft\Luna\Attributes\Modifier;
use Windwalker\Core\DateTime\Chronos;
use Windwalker\Core\DateTime\ServerTimeCast;
use Windwalker\ORM\Attributes\AutoIncrement;
use Windwalker\ORM\Attributes\Cast;
use Windwalker\ORM\Attributes\CastNullable;
use Windwalker\ORM\Attributes\Column;
use Windwalker\ORM\Attributes\CreatedTime;
use Windwalker\ORM\Attributes\CurrentTime;
use Windwalker\ORM\Attributes\EntitySetup;
use Windwalker\ORM\Attributes\PK;
use Windwalker\ORM\Attributes\Table;
use Windwalker\ORM\Cast\JsonCast;
use Windwalker\ORM\EntityInterface;
use Windwalker\ORM\EntityTrait;
use Windwalker\ORM\Metadata\EntityMetadata;

// phpcs:disable
// todo: remove this when phpcs supports 8.4
#[Table('formkit_responses', 'formkit_response')]
#[\AllowDynamicProperties]
class FormkitResponse implements EntityInterface
{
    use EntityTrait;

    #[Column('id'), PK, AutoIncrement]
    public ?int $id = null;

    #[Column('formkit_id')]
    public int $formkitId = 0;

    #[Column('content')]
    #[Cast(JsonCast::class)]
    public array $content = [];

    #[Column('state')]
    #[Cast(ResState::class)]
    public ResState $state = ResState::PENDING {
        set(ResState|string $value) => $this->state = ResState::wrap($value);
    }

    #[Column('from')]
    public string $from = '';

    #[Column('ip')]
    public string $ip = '';

    #[Column('ua')]
    public string $ua = '';

    #[Column('browser')]
    public string $browser = '';

    #[Column('os')]
    public string $os = '';

    #[Column('device')]
    public string $device = '';

    #[Column('created')]
    #[CastNullable(ServerTimeCast::class)]
    #[CreatedTime]
    public ?Chronos $created = null {
        set(\DateTimeInterface|string|null $value) => $this->created = Chronos::tryWrap($value);
    }

    #[Column('modified')]
    #[CastNullable(ServerTimeCast::class)]
    #[CurrentTime]
    public ?Chronos $modified = null {
        set(\DateTimeInterface|string|null $value) => $this->modified = Chronos::tryWrap($value);
    }

    #[Column('created_by')]
    #[Author]
    public int $createdBy = 0;

    #[Column('modified_by')]
    #[Modifier]
    public int $modifiedBy = 0;

    #[Column('params')]
    #[Cast(JsonCast::class)]
    public array $params = [];

    #[EntitySetup]
    public static function setup(EntityMetadata $metadata): void
    {
        //
    }
}
