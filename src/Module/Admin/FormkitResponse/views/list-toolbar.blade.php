<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit\View;

/**
 * Global variables
 * --------------------------------------------------------------
 * @var  $app       AppContext      Application context.
 * @var  $vm        FormkitResponseListView  The view model object.
 * @var  $uri       SystemUri       System Uri information.
 * @var  $chronos   ChronosService  The chronos datetime service.
 * @var  $nav       Navigator       Navigator object to build route.
 * @var  $asset     AssetService    The Asset manage service.
 * @var  $lang      LangService     The language translation service.
 */

use Lyrasoft\Formkit\Module\Admin\FormkitResponse\FormkitResponseListView;
use Windwalker\Core\Application\AppContext;
use Windwalker\Core\Asset\AssetService;
use Windwalker\Core\DateTime\ChronosService;
use Windwalker\Core\Language\LangService;
use Windwalker\Core\Router\Navigator;
use Windwalker\Core\Router\SystemUri;
use Windwalker\Form\Form;

/**
* @var $form Form
*/

?>

<div x-title="toolbar" x-data="{ form: $store.grid.form, grid: $store.grid }" class="l-toolbar">
    <a href="{{ $nav->self()->var('export', '1') }}"
        class="btn btn-sm btn-success"
        target="_blank"
        style="width: 150px"
    >
        <i class="far fa-file-excel"></i>
        匯出
    </a>

    {{-- Change State --}}
    <x-state-dropdown color-on="text"
        button-style="width: 100%"
        use-states
        batch
        :workflow="[$workflow]"
        class="uni-btn-state"
    >
        @lang('unicorn.toolbar.state.change')
    </x-state-dropdown>

{{--    @if ($form?->countFields(null, 'batch'))--}}
{{--        --}}{{-- Batch --}}
{{--        <button type="button" class="btn btn-dark btn-sm uni-btn-batch"--}}
{{--            @click="grid.validateChecked(null, function () {--}}
{{--                (new bootstrap.Modal('#batch-modal')).show();--}}
{{--            })"--}}
{{--        >--}}
{{--            <i class="fa fa-sliders"></i>--}}
{{--            @lang('unicorn.toolbar.batch')--}}
{{--        </button>--}}
{{--    @endif--}}

    {{-- Delete --}}
    <button type="button" class="btn btn-outline-danger btn-sm uni-btn-delete"
        @click="grid.deleteList()"
    >
        <i class="fa fa-trash"></i>
        @lang('unicorn.toolbar.delete')
    </button>
</div>
