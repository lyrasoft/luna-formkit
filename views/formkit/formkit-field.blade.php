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

use Cron\AbstractField;
use Lyrasoft\Formkit\Entity\Formkit;
use Lyrasoft\Formkit\Formkit\FormkitOptions;
use Lyrasoft\Formkit\Formkit\FormkitService;
use Lyrasoft\Formkit\Formkit\Type\AbstractFormType;
use Windwalker\Core\Application\AppContext;
use Windwalker\Core\Asset\AssetService;
use Windwalker\Core\DateTime\ChronosService;
use Windwalker\Core\Language\LangService;
use Windwalker\Core\Router\Navigator;
use Windwalker\Core\Router\SystemUri;
use Windwalker\Data\Collection;
use Windwalker\Form\Form;

/**
 * @var $formField           AbstractField
 * @var $field               AbstractFormType
 * @var $options             FormkitOptions
 * @var $formkitService      FormkitService
 */

?>

<div class="c-formkit-field-wrapper" data-uid="{{ $formField->get('uid') }}">
    @include($formkitService->getFieldLayout($field))
</div>
