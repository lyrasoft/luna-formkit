<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit\View;

/**
 * Global variables
 * --------------------------------------------------------------
 * @var  $app       AppContext      Application context.
 * @var  $vm        FormkitListView The view model object.
 * @var  $uri       SystemUri       System Uri information.
 * @var  $chronos   ChronosService  The chronos datetime service.
 * @var  $nav       Navigator       Navigator object to build route.
 * @var  $asset     AssetService    The Asset manage service.
 * @var  $lang      LangService     The language translation service.
 */

use Lyrasoft\Formkit\Entity\Formkit;
use Unicorn\Workflow\BasicStateWorkflow;
use Windwalker\Core\Application\AppContext;
use Windwalker\Core\Asset\AssetService;
use Windwalker\Core\DateTime\ChronosService;
use Windwalker\Core\Language\LangService;
use Windwalker\Core\Router\Navigator;
use Windwalker\Core\Router\SystemUri;
use Lyrasoft\Formkit\Module\Admin\Formkit\FormkitListView;

/**
 * @var $item Formkit
 */

$workflow = $app->service(BasicStateWorkflow::class);
?>

@extends('admin.global.body-list')

@section('toolbar-buttons')
    @include('list-toolbar')
@stop

@section('content')
    <form id="admin-form" action="" x-data="{ grid: $store.grid }"
        x-ref="gridForm"
        data-ordering="{{ $ordering }}"
        method="post">

        <x-filter-bar :form="$form" :open="$showFilters"></x-filter-bar>

        {{-- RESPONSIVE TABLE DESC --}}
        <div class="d-block d-lg-none mb-3">
            @lang('unicorn.grid.responsive.table.desc')
        </div>

        <div class="grid-table table-responsive-lg">
            <table class="table table-striped table-hover">
                <thead>
                <tr>
                    {{-- Toggle --}}
                    <th style="width: 1%">
                        <x-toggle-all></x-toggle-all>
                    </th>

                    {{-- State --}}
                    <th style="width: 5%" class="text-nowrap">
                        <x-sort field="formkit.state">
                            @lang('unicorn.field.state')
                        </x-sort>
                    </th>

                    {{-- Title --}}
                    <th class="text-nowrap">
                        <x-sort field="formkit.title">
                            @lang('unicorn.field.title')
                        </x-sort>
                    </th>

                    <th class="text-nowrap" style="width: 5%">
                        前台
                    </th>

                    <th class="text-nowrap" style="width: 5%">
                        觀看提交
                    </th>

                    {{-- Delete --}}
                    <th style="width: 1%" class="text-nowrap">
                        @lang('unicorn.field.delete')
                    </th>

                    {{-- ID --}}
                    <th style="width: 1%" class="text-nowrap text-end">
                        <x-sort field="formkit.id">
                            @lang('unicorn.field.id')
                        </x-sort>
                    </th>
                </tr>
                </thead>

                <tbody>
                @forelse($items as $i => $item)
                    <tr>
                        {{-- Checkbox --}}
                        <td>
                            <x-row-checkbox :row="$i" :id="$item->getId()"></x-row-checkbox>
                        </td>

                        {{-- State --}}
                        <td>
                            <x-publishing-dropdown color-on="text"
                                button-style="width: 100%"
                                use-states
                                :workflow="$workflow"
                                :id="$item->getId()"
                                :value="$item->state"
                                :publish-up="$item->getPublishUp()"
                                :publish-down="$item->getPublishDown()"
                            >

                            </x-publishing-dropdown>
                        </td>

                        {{-- Title --}}
                        <td>
                            <div>
                                <a href="{{ $nav->to('formkit_edit')->id($item->getId()) }}">
                                    {{ $item->getTitle() }}
                                </a>
                            </div>
                        </td>

                        <td class="text-nowrap">
                            <a href="{{ $item->makeLink($nav) }}"
                                class="btn btn-sm btn-outline-info"
                                target="_blank"
                            >
                                <i class="far fa-eye"></i>
                                前往
                            </a>
                            <button type="button"
                                class="btn btn-sm btn-outline-info"
                                onclick="navigator.clipboard.writeText('{{ $item->makeLink($nav)->full() }}');"
                            >
                                <i class="far fa-copy"></i>
                                複製
                            </button>
                        </td>

                        <td class="text-nowrap">
                            <a href="{{ $nav->to('formkit_response_list')->var('formkit_id', $item->getId()) }}"
                                class="btn btn-sm btn-outline-primary">
                                <i class="far fa-list"></i>
                                觀看提交
                                @if ($item->res_count)
                                    ({{ $item->res_count }})
                                @endif
                            </a>
                        </td>

                        {{-- Delete --}}
                        <td class="text-center">
                            <button type="button" class="btn btn-sm btn-outline-secondary"
                                @click="grid.deleteItem('{{ $item->getId() }}')"
                                data-dos
                            >
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </td>

                        {{-- ID --}}
                        <td class="text-end">
                            {{ $item->getId() }}
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="30">
                            <div class="c-grid-no-items text-center" style="padding: 125px 0;">
                                <h3 class="text-secondary">@lang('unicorn.grid.no.items')</h3>
                            </div>
                        </td>
                    </tr>
                @endforelse
                </tbody>
            </table>

            <div>
                <x-pagination :pagination="$pagination"></x-pagination>
            </div>
        </div>

        <div class="d-none">
            <input name="_method" type="hidden" value="PUT" />
            <x-csrf></x-csrf>
        </div>

        <x-batch-modal :form="$form" namespace="batch"></x-batch-modal>
    </form>

@stop
