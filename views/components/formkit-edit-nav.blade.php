<?php

declare(strict_types=1);

namespace App\view;

/**
 * Global variables
 * --------------------------------------------------------------
 * @var $app       AppContext      Application context.
 * @var $vm        object          The view model object.
 * @var $uri       SystemUri       System Uri information.
 * @var $chronos   ChronosService  The chronos datetime service.
 * @var $nav       Navigator       Navigator object to build route.
 * @var $asset     AssetService    The Asset manage service.
 * @var $lang      LangService     The language translation service.
 */

use Lyrasoft\Formkit\Entity\Formkit;
use Unicorn\Legacy\Html\MenuHelper;
use Windwalker\Core\Application\AppContext;
use Windwalker\Core\Asset\AssetService;
use Windwalker\Core\DateTime\ChronosService;
use Windwalker\Core\Language\LangService;
use Windwalker\Core\Router\Navigator;
use Windwalker\Core\Router\SystemUri;

/**
 * @var $formkit ?Formkit
 * @var $count int
 */

$self = $nav->self();

$menu = $app->service(MenuHelper::class);

?>
<div class="card">
    <div class="card-body p-2">
        <div class="nav nav-pills">
            <a class="nav-item nav-link bg-light me-2"
                href="{{ $nav->to('formkit_list') }}">
                <i class="far fa-arrow-left"></i>
                回到表單列表
            </a>

            <a class="nav-item nav-link {{ $menu->active('formkit_edit') }} {{ $formkit ? '' : 'disabled' }}"
                href="{{ $nav->to('formkit_edit')->id($formkit?->getId()) }}">
                <i class="far fa-edit"></i>
                表單編輯
            </a>

            <a class="nav-item nav-link {{ $menu->active('formkit_response_list') }} {{ $formkit ? '' : 'disabled' }} d-flex align-items-center gap-1"
                href="{{ $nav->to('formkit_response_list')->var('formkit_id', $formkit?->getId()) }}">
                <i class="far fa-list"></i>
                <span>觀看提交</span>
                @if ($count)
                    <span class="badge {{ $menu->active('formkit_response_list') ? 'bg-light' : 'bg-primary' }} rounded-pill"
                        style="">
                        {{ $count }}
                    </span>
                @endif
            </a>
        </div>
    </div>
</div>
