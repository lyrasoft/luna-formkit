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

use Windwalker\Core\Application\AppContext;
use Windwalker\Core\Asset\AssetService;
use Windwalker\Core\DateTime\ChronosService;
use Windwalker\Core\Language\LangService;
use Windwalker\Core\Router\Navigator;
use Windwalker\Core\Router\SystemUri;

?>
@extends('mail.mail-layout')

@section('content')
    <style>
        .c-preview-table th {
            text-align: left;
        }

        .c-preview-table td,
        .c-preview-table th {
            padding: 10px;
        }

        .c-preview-table tr:nth-child(even) {
            background-color: #eee;
        }

        .c-preview-table ul {
            padding-inline-start: 15px;
        }
    </style>

    <p>
        Hi Admin:
    </p>

    <p>
        表單: {{ $item->getTitle() }} 有新的填答。
    </p>

    <div>
        @include('formkit.formkit-preview-table', ['item' => $res, 'formkit' => $item])
    </div>

    <div style="margin-top: 30px">
        <a class="btn btn-primary"
            style="width: 100%"
            href="{{ $nav->to('admin::formkit_response_list')->full() . '#res-' . $item->getId() }}">
            前往後台觀看
        </a>
    </div>
@stop
