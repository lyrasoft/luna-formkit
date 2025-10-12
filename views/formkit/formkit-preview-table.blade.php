<?php

declare(strict_types=1);

namespace App\view;

/**
 * Global variables
 * --------------------------------------------------------------
 * @var $app       AppContext      Application context.
 * @var $vm        FormkitResponseEditView          The view model object.
 * @var $uri       SystemUri       System Uri information.
 * @var $chronos   ChronosService  The chronos datetime service.
 * @var $nav       Navigator       Navigator object to build route.
 * @var $asset     AssetService    The Asset manage service.
 * @var $lang      LangService     The language translation service.
 */

use Lyrasoft\Formkit\Entity\Formkit;
use Lyrasoft\Formkit\Entity\FormkitResponse;
use Lyrasoft\Formkit\Formkit\FormkitService;
use Lyrasoft\Formkit\Formkit\Type\AbstractFormType;
use Lyrasoft\Formkit\Module\Admin\FormkitResponse\FormkitResponseEditView;
use Lyrasoft\Luna\User\UserService;
use Windwalker\Core\Application\AppContext;
use Windwalker\Core\Asset\AssetService;
use Windwalker\Core\DateTime\ChronosService;
use Windwalker\Core\Language\LangService;
use Windwalker\Core\Router\Navigator;
use Windwalker\Core\Router\SystemUri;

/**
 * @var $formkit Formkit
 * @var $item    FormkitResponse
 * @var $field   AbstractFormType
 */

$formkitService = $app->retrieve(FormkitService::class);
$userService = $app->retrieve(UserService::class);

[, $fields] = $formkitService->prepareFormkitgetFormkitMeta($formkit);

$user = $userService->load(['id' => $item->createdBy]);
$content = $item->content;

?>
<table class="table table-striped c-preview-table">

    {{-- ID --}}
    <tr>
        <th style="width: 30%;">
            @lang('unicorn.field.id')
        </th>
        <td>
            #{{ $item->id }}
        </td>
    </tr>

    {{-- Time --}}
    <tr>
        <th>
            @lang('unicorn.field.created')
        </th>
        <td>
            {{ $chronos->toLocalFormat($item->created) }}
        </td>
    </tr>

    {{-- Name --}}
    @if ($user && method_exists($user, 'getName'))
        <tr>
            <th>
                會員
            </th>
            <td>
                {{ $user->name }}
            </td>
        </tr>
    @endif

    @foreach ($fields as $field)
        @php
            $values = array_values($field->prepareViewData($content));
        @endphp
        @foreach ($field->prepareViewLabels() as $i => $label)
            <tr>
                <th>
                    {{ $label }}
                </th>
                <td>
                    {!! $values[$i] !!}
                </td>
            </tr>
        @endforeach
    @endforeach

    {{-- User Info --}}
    <tr>
        <th>
            裝置資訊
        </th>
        <td>
            <div>
                {{ $item->ip }}
            </div>

            <div>
                {{ $item->ua }}
            </div>
        </td>
    </tr>
</table>

