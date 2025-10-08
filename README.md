# LYRASOFT Formkit Package

![](https://github.com/user-attachments/assets/f039758a-cdfb-49db-90a6-a8a759e222ce)

## Installation

Install from composer

```shell
composer require lyrasoft/formkit
```

Then copy files to project

```shell
php windwalker pkg:install lyrasoft/formkit -t routes -t migrations -t seeders
```

Seeders

- Add `formkit-seeder.php` to `resources/seeders/main.php`

### Language Files

Add this line to admin & front middleware if you don't want to override languages:

```php
$this->lang->loadAllFromVendor('lyrasoft/formkit', 'ini');

// OR

$this->lang->loadAllFromVendor(\Lyrasoft\Formkit\FormkitPackage::class, 'ini');
```

Or run this command to copy languages files:

```
php windwalker pkg:install lyrasoft/formkit -t lang
```

## Register Admin Menu

Edit `resources/menu/admin/sidemenu.menu.php`

```php
// Contact
$menu->link('表單管理')
    ->to($nav->to('formkit_list'))
    ->icon('fal fa-layer-group');
```

## Use As Standalone Page

Copy URL or open page from edit sidebar:

![p-001-2024-08-22-02-24-19](https://github.com/user-attachments/assets/963362af-7644-46f9-8d7e-6ea07c9271bb)

You will see standalone page:

![p-001-2024-08-22-02-25-15](https://github.com/user-attachments/assets/a5bb2f2b-3a18-4f9c-91d3-81ecb9cfc82f)

The page extends layout is configuable, see config file:

```php
    // ...
    'view' => [
        'default_extends' => 'global.body',
        'extends' => [
            'global.body' => 'Default Layout',
            
            // You can add new layout
            'layout.blog-layout' => 'Blog Layout',
        ]
    ],
    // ...
```

Add a new layout option, then it can be choose:

![p-001-2024-08-22-02-34-42](https://github.com/user-attachments/assets/55498625-c2ad-4e0a-88cf-c1694c093a21)

You can disable page view by toggle `可使用公開網址`, if disable this field, the URL will unable to access form.

![p-001-2024-08-22-02-26-13](https://github.com/user-attachments/assets/e242424d-3926-444e-947a-4eda019e9e9e)

## Use By ShortCode

You must manually process short code in code, for example:

```php
$formkitService = $app->retrieve(\Lyrasoft\Formkit\Formkit\FormkitService::class);

// In blade
{!! $formkitService->parseShortCode($article->getFulltext()) !!}
```

Now you can copy the short-code to article content:

![p-001-2024-08-22-02-29-41](https://github.com/user-attachments/assets/6af986b7-a8e3-4d12-bf49-af9019d052cc)

Short-code usage:

```
[formkit id=123]
[formkit alias=foo-bar]
[formkit id=123 force=1]
```

### Formkit Publish Down

When as formkit is render by short-code and was publish down, there are another `formkit/formkit-unpublish.blade.php` 
layout to show end information, it is default empty, you can modify it if you need.

## Configure Mail

In `etc/packages/formkit.php`, you can add custom cc, bcc or target roles to receive mails.

The users fetch by roles, must enable `Receive Email` that can receive mail.

```php
    // ...

    'receivers' => [
        'roles' => [
            'superuser',
            'admin'
        ],
        'cc' => [
            //
        ],
        'bcc' => [
            //
        ],
    ],

    // ...
```

To modify mail layout, see `mail/formkit-receiver-mail.blade.php` and `formkit/formkit-preview-table.blade.php`

## Form Fields And Components

### Add Custom Widget to Field Cards

There has 3 porisions you can insert widgets to field card:

- start
- end
- toolbar

![p-001-2024-08-22-02-48-28](https://github.com/user-attachments/assets/eea57150-c804-4a92-ac41-1936661b0861)

The code example:

```vue
// resources/assets/src/formkit/FieldCardEnd.vue
<script setup lang="ts">
import { FieldEditCotent } from '~vendor/lyrasoft/formkit/dist';

const item = defineModel<FieldEditCotent>();
</script>

<template>
  <div class="row">
    <div class="form-group col-lg-3">
      <label class="form-label" for="">背景顏色</label>
      <div>
        <input type="color" class="form-control"
          v-model.lazy="item.background_color" />
      </div>
    </div>
    ...
  </div>
</template>
```

```ts
// admin/main.ts
import FieldCardEnd from '~/formkit/FieldCardEnd.vue';
import { App as VueApp } from 'vue';

const u = useUnicorn();

u.on('formkit.prepared', (app: VueApp) => {
    app.provide('field.card.end', FieldCardEnd);
});
```

### Override Field Edit Components

Fields components is localted at `assets/src/fields/*.ts`, copy the file you want to override to root project's `resources/assets/src`.

And register new component in `admin/main.ts`:

```php
import { useFieldComponents } from '~vendor/lyrasoft/formkit/dist';

useFieldComponents({
  'text': () => import('~/formkit/my-form-text'),
});
```

### Add New Field Type

Create a new PHP class for field type:

```php
<?php

declare(strict_types=1);

namespace App\Formkit;

use Lyrasoft\Formkit\Formkit\Type\AbstractFormType;
use Windwalker\Core\Application\AppContext;
use Windwalker\Core\Asset\AssetService;

class FormHello extends AbstractFormType
{
    public static function getTitle(): string
    {
        return 'Hello Form';
    }

    public static function getId(): string
    {
        return 'hello';
    }

    public static function getIcon(): string
    {
        return 'fa fa-smile';
    }

    public static function getDescription(): string
    {
        return 'A simple hello world form.';
    }

    public static function loadVueComponent(AppContext $app, AssetService $asset): ?string
    {
        return $asset->path('@vite/src/formkit/FormHello.vue');
    }
}
```

Register it to `formkit.config.php`:

```diff
    // ...

    'types' => [
+        FormHello::getId() => FormHello::class,
        FormText::getId() => FormText::class,
        FormTextarea::getId() => FormTextarea::class,
        
        // ...
    ]
```

Create vue file for admin editor:

```vue
// resources/assets/src/formkit/FormHello.vue
<script setup lang="ts">
import { onMounted } from 'vue';
import { FieldEditCotent } from '~vendor/lyrasoft/formkit/dist';

const item = defineModel<FieldEditCotent>();

</script>

<template>
    <div>
        <h3>Hello Form</h3>
    </div>
</template>

<style scoped>

</style>

```

Then run `yarn build` or `yarn dev`, you will see new field type:

![Image](https://github.com/user-attachments/assets/61390941-6d48-48c8-9a17-bd14674adbe1)
