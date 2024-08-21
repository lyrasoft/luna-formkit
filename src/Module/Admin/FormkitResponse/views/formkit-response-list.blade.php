<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit\View;

/**
 * Global variables
 * --------------------------------------------------------------
 * @var  $app       AppContext      Application context.
 * @var  $vm        FormkitResponseListView The view model object.
 * @var  $uri       SystemUri       System Uri information.
 * @var  $chronos   ChronosService  The chronos datetime service.
 * @var  $nav       Navigator       Navigator object to build route.
 * @var  $asset     AssetService    The Asset manage service.
 * @var  $lang      LangService     The language translation service.
 */

use Lyrasoft\Formkit\Entity\FormkitResponse;
use Lyrasoft\Formkit\Formkit\Type\AbstractFormType;
use Lyrasoft\Formkit\Workflow\ResponseWorkflow;
use Windwalker\Core\Application\AppContext;
use Windwalker\Core\Asset\AssetService;
use Windwalker\Core\DateTime\ChronosService;
use Windwalker\Core\Language\LangService;
use Windwalker\Core\Router\Navigator;
use Windwalker\Core\Router\SystemUri;
use Lyrasoft\Formkit\Module\Admin\FormkitResponse\FormkitResponseListView;

/**
 * @var $item          FormkitResponse
 * @var $previewFields AbstractFormType[]
 */

$workflow = $app->service(ResponseWorkflow::class);
?>

@extends('admin.global.body-list')

@section('toolbar-buttons')
    @include('list-toolbar')
@stop

@section('banner')
    @parent

    <x-formkit-edit-nav :formkit="$formkit" />
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

        <div class="grid-table table-responsive">
            <table class="table table-striped table-hover">
                <thead>
                <tr>
                    {{-- Toggle --}}
                    <th style="width: 1%">
                        <x-toggle-all></x-toggle-all>
                    </th>

                    {{-- State --}}
                    <th style="width: 5%" class="text-nowrap">
                        <x-sort field="formkit_response.state">
                            @lang('unicorn.field.state')
                        </x-sort>
                    </th>

                    {{-- ID --}}
                    <th style="width: 1%" class="text-nowrap">
                        <x-sort field="formkit_response.id">
                            @lang('unicorn.field.id')
                        </x-sort>
                    </th>

                    <th>
                        觀看
                    </th>

                    <th class="text-nowrap" style="width: 3%">
                        <x-sort field="formkit_response.created_by">
                            會員
                        </x-sort>
                    </th>

                    <th class="text-nowrap" style="width: 5%">
                        <x-sort field="formkit_response.created">
                            @lang('unicorn.field.created')
                        </x-sort>
                    </th>

                    @foreach ($previewFields as $previewField)
                        @foreach ($previewField->prepareViewLabels() as $label)
                            <th class="text-nowrap" style="min-width: 200px; width: auto">
                                {{ $label }}
                            </th>
                        @endforeach
                    @endforeach
                </tr>
                </thead>

                <tbody>
                @forelse($items as $i => $item)
                    @php
                        $content = $item->getContent();
                    @endphp
                    <tr>
                        {{-- Checkbox --}}
                        <td>
                            <x-row-checkbox :row="$i" :id="$item->getId()"></x-row-checkbox>
                        </td>

                        {{-- State --}}
                        <td>
                            <div class="d-flex gap-2">
                                <x-state-dropdown color-on="button"
                                    class="w-100"
                                    button-style="width: 100%"
                                    use-states
                                    :workflow="$workflow"
                                    :id="$item->getId()"
                                    :value="$item->state"
                                >
                                    <x-slot name="end">
                                        <li class="dropdown-divider"></li>
                                        <button type="button"
                                            class="dropdown-item"
                                            @click="grid.deleteItem('{{ $item->getId() }}')"
                                            data-dos
                                        >
                                            <i class="fa-fw far fa-trash text-danger"></i>
                                            刪除
                                        </button>
                                    </x-slot>
                                </x-state-dropdown>
                            </div>
                        </td>

                        {{-- ID --}}
                        <td class="">
                            #{{ $item->getId() }}
                        </td>

                        <td>
                            <a class="btn btn-sm btn-info"
                                href="{{ $nav->to('formkit_response_edit')->id($item->getId())->layout('preview') }}"
                                uni-modal-link="#preview-modal"
                                data-resize="1"
                            >
                                <i class="far fa-eye"></i>
                            </a>
                        </td>

                        {{-- User --}}
                        <td class="text-nowrap" style="max-width: 200px">
                            {{ $item->submitter?->name ?? '-' }}
                        </td>

                        {{-- Created --}}
                        <td class="text-nowrap">
                            {{ $chronos->toLocalFormat($item->getCreated()) }}
                        </td>

                        @foreach ($previewFields as $previewField)
                            @foreach ($previewField->prepareViewData($content) as $value)
                                <td>
                                    {!! $value !!}
                                </td>
                            @endforeach
                        @endforeach
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

        <uni-iframe-modal id="preview-modal" size="modal-lg"
            data-route="{{ $nav->to('formkit_response_edit')->id('{id}')->layout('preview') }}"
        ></uni-iframe-modal>
    </form>

@stop
