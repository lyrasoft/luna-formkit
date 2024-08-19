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
use App\Formkit\FormkitService;
use App\Formkit\Type\AbstractFormType;
use Lyrasoft\Formkit\Formkit\Type\FormCheckboxes;
use Windwalker\Core\Application\AppContext;
use Windwalker\Core\Asset\AssetService;
use Windwalker\Core\DateTime\ChronosService;
use Windwalker\Core\Language\LangService;
use Windwalker\Core\Router\Navigator;
use Windwalker\Core\Router\SystemUri;
use Windwalker\Data\Collection;
use Windwalker\Form\Field\AbstractField;
use Windwalker\Form\Field\ListField;
use Windwalker\Form\Form;

/**
 * @var $item           Formkit
 * @var $form           Form
 * @var $fields         Collection<AbstractFormType>
 * @var $options        array
 * @var $formkitService FormkitService
 * @var $field          FormCheckboxes
 * @var $formField      ListField
 */

if ($field->hasOther()) {
    $formField->option(
        $field->getOptionText($formField),
        '其他',
    );
}
?>

<x-field :field="$formField"></x-field>
