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

