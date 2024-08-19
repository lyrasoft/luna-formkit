<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit\View;

/**
 * Global variables
 * --------------------------------------------------------------
 * @var  $app       AppContext      Application context.
 * @var  $vm        FormkitEditView  The view model object.
 * @var  $uri       SystemUri       System Uri information.
 * @var  $chronos   ChronosService  The chronos datetime service.
 * @var  $nav       Navigator       Navigator object to build route.
 * @var  $asset     AssetService    The Asset manage service.
 * @var  $lang      LangService     The language translation service.
 */

use Lyrasoft\Formkit\Entity\Formkit;
use Lyrasoft\Formkit\Formkit\FormkitService;
use Lyrasoft\Formkit\Formkit\Type\AbstractFormType;
use Lyrasoft\Formkit\Module\Admin\Formkit\FormkitEditView;
use Unicorn\Script\UnicornScript;
use Unicorn\Script\VueScript;
use Windwalker\Core\Application\AppContext;
use Windwalker\Core\Asset\AssetService;
use Windwalker\Core\DateTime\ChronosService;
use Windwalker\Core\Language\LangService;
use Windwalker\Core\Router\Navigator;
use Windwalker\Core\Router\SystemUri;
use Windwalker\Form\Form;

/**
 * @var $form Form
 * @var $item Formkit
 */

$uniScript = $app->retrieve(UnicornScript::class);
$vueScript = $app->retrieve(VueScript::class);
$formkitService = $app->retrieve(FormkitService::class);

$vueScript->vue();
$vueScript->animate();

$asset->js('vendor/lyrasoft/formkit/dist/formkit-edit/index.js');

$types = $formkitService->getFormTypes()
    ->map(
    /** @var class-string<AbstractFormType> $formType */
        fn($formType) => $formType::getTypeMeta($app, $asset, $lang)
    );

$uniScript->data(
    'formkit.props',
    [
        'fields' => $item->getContent(),
        'types' => $types,
        'item' => $item,
        'name' => 'item[content]'
    ]
);

?>

@extends('admin.global.body-edit')

@section('toolbar-buttons')
    @include('edit-toolbar')
@stop

@section('content')
    <form name="admin-form" id="admin-form"
        uni-form-validate='{"scroll": true}'
        action="{{ $nav->to('formkit_edit') }}"
        method="POST" enctype="multipart/form-data">

        <x-title-bar :form="$form" ns="item"></x-title-bar>

        <div class="row">
            <div class="col-lg-8">
                <formkit-edit-app id="formkit-edit-app" />
            </div>
            <div class="col-lg-4">
                <x-fieldset name="basic" :title="$lang('unicorn.fieldset.basic')"
                    :form="$form"
                    class="mb-4"
                    is="card"
                >
                    <x-slot name="start">
                        @if ($item)
                            <div class="form-group mb-4">
                                <label class="form-label">前台網址</label>
                                <div class="input-group ">
                                    <input type="text" class="form-control" disabled
                                        value="{{ $item->makeLink($nav)->full() }}"
                                    />
                                    <a href="{{ $item->makeLink($nav)->full() }}"
                                        target="_blank"
                                        class="btn btn-outline-info">
                                        <i class="far fa-external-link"></i>
                                        打開
                                    </a>
                                    <button type="button"
                                        class="btn btn-outline-info"
                                        onclick="navigator.clipboard.writeText('{{ $item->makeLink($nav)->full() }}')"
                                    >
                                        <i class="far fa-copy"></i>
                                        複製
                                    </button>
                                </div>
                            </div>
                        @endif
                    </x-slot>
                </x-fieldset>

                <x-fieldset name="meta" :title="$lang('unicorn.fieldset.meta')"
                    :form="$form"
                    class="mb-4"
                    is="card"
                >
                </x-fieldset>
            </div>
        </div>

        <div class="d-none">
            @if ($idField = $form?->getField('item/id') ?? $form?->getField('id'))
                <input name="{{ $idField->getInputName() }}" type="hidden" value="{{ $idField->getValue() }}" />
            @endif

            <x-csrf></x-csrf>
        </div>
    </form>
@stop
