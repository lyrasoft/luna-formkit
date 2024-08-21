<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit\Component;

use Closure;
use Lyrasoft\Formkit\Entity\Formkit;
use Lyrasoft\Formkit\Entity\FormkitResponse;
use Windwalker\Core\Edge\Attribute\EdgeComponent;
use Windwalker\Core\Html\HtmlFrame;
use Windwalker\Edge\Component\AbstractComponent;
use Windwalker\ORM\ORM;
use Windwalker\Utilities\Attributes\Prop;

#[EdgeComponent('formkit-edit-nav')]
class FormkitEditNavComponent extends AbstractComponent
{
    #[Prop]
    public ?Formkit $formkit = null;

    public function __construct(protected ORM $orm, protected HtmlFrame $htmlFrame)
    {
        //
    }

    public function data(): array
    {
        $this->htmlFrame->addBodyClass('sidebar-enable vertical-collpsed');

        $data = parent::data();

        if ($this->formkit) {
            $count = $this->orm->from(FormkitResponse::class)
                ->where('formkit_id', $this->formkit->getId())
                ->count();
        } else {
            $count = 0;
        }

        return array_merge(
            $data,
            compact('count')
        );
    }

    public function render(): Closure|string
    {
        return 'components.formkit-edit-nav';
    }
}
