<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit\view;

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
use Lyrasoft\Formkit\Formkit\FormkitService;
use Lyrasoft\Formkit\Formkit\Type\AbstractFormType;
use Unicorn\Script\UnicornScript;
use Windwalker\Core\Application\AppContext;
use Windwalker\Core\Asset\AssetService;
use Windwalker\Core\DateTime\ChronosService;
use Windwalker\Core\Language\LangService;
use Windwalker\Core\Router\Navigator;
use Windwalker\Core\Router\SystemUri;
use Windwalker\Data\Collection;
use Windwalker\Form\Form;

use function Windwalker\collect;
use function Windwalker\uid;

/**
 * @var $item           Formkit
 * @var $form           Form
 * @var $fields         Collection<AbstractFormType>
 * @var $options        array
 * @var $formkitService FormkitService
 */

$asset->js('vendor/lyrasoft/formkit/dist/formkit.js');

$uid = uid();
$formId = $options['id'] ?? 'formkit-' . $uid;

$uniScript = $app->retrieve(UnicornScript::class);

$options = collect($options);

$return = $options['return'];

$uniScript->addRoute(
    'formkit.action.' . $uid,
    $nav->to('formkit_submit')
        ->id($item->getId())
        ->var('ns', $form->getNamespace())
        ->withReturn(return: $return)
        ->full()
);

$captcha = (bool) ($item->getParams()['captcha'] ?? false);

?>
<div id="{{ $formId }}-wrapper" class="l-formkit-wrapper mb-5 mt-5" data-role="formkit"
    uni-formkit="{{ $uid }}">
    <form id="{{ $formId }}" method="post" enctype="multipart/form-data"
        uni-form-validate='{"scroll": true}'>
        <div class="l-formkit-content mb-5">
            @if (trim($item->getDescription()))
                <div class="l-formkit-content__desc">
                    {!! $item->getDescription() !!}
                </div>
            @endif
        </div>

        @foreach ($fields as $field)
            @php
                $formField = $form[$field->getLabel()];
                if (!$formField) {
                    throw new \OutOfBoundsException('FormField of ' . $field->getLabel() . ' not found.');
                }
            @endphp
            <div class="c-formkit-field-wrapper mb-4" data-uid="{{ $formField->get('uid') }}">
                @include($formkitService->getFieldLayout($field))
            </div>
        @endforeach

        @if ($captcha)
            <div class="l-captcha-wrapper mx-auto mt-5" style="max-width: 500px">
                <x-field :field="$form['captcha']" class=""></x-field>
            </div>
        @endif

        <div class="py-5 text-center">
            <button type="reset" class="btn btn-lg btn-outline-secondary"
                style="min-width: 150px">
                清除
            </button>
            <button type="button" class="btn btn-lg btn-primary"
                data-task="submit"
                style="min-width: 250px"
                data-dos
            >
                送出
            </button>
        </div>

        <div class="d-none">
            <x-csrf></x-csrf>
        </div>
    </form>
</div>
