<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit\Formkit\Type;

use Lyrasoft\Formkit\Entity\Formkit;
use Psr\Http\Message\UploadedFileInterface;
use Unicorn\Aws\S3Service;
use Unicorn\Field\FileDragField;
use Unicorn\Storage\Adapter\LocalStorage;
use Unicorn\Upload\FileUploadService;
use Windwalker\Core\Application\Context\AppRequestInterface;
use Windwalker\Core\Application\ServiceAwareInterface;
use Windwalker\Core\Form\Exception\ValidateFailException;
use Windwalker\Core\Http\AppRequest;
use Windwalker\Core\Router\SystemUri;
use Windwalker\Filesystem\Path;
use Windwalker\Form\Field\AbstractField;
use Windwalker\Http\Helper\HeaderHelper;
use Windwalker\Http\Helper\UploadedFileHelper;
use Windwalker\Utilities\Contract\LanguageInterface;

use function Windwalker\collect;
use function Windwalker\DOM\h;
use function Windwalker\tid;
use function Windwalker\uid;

/**
 * The FormsetText class.
 *
 * @since  __DEPLOY_VERSION__
 */
class FormFile extends AbstractFormType
{
    public function __construct(protected FileUploadService $fileUploadService, protected SystemUri $uri)
    {
    }

    public static function getIcon(): string
    {
        return 'far fa-upload';
    }

    public static function getTitle(): string
    {
        return '檔案上傳';
    }

    public static function getGroup(LanguageInterface $lang): string
    {
        return '其他';
    }

    public static function getId(): string
    {
        return 'file';
    }

    public static function getDescription(): string
    {
        return '上傳檔案的欄位';
    }

    public static function getDefaultParams(): array
    {
        return array_merge(
            parent::getDefaultParams(),
            [
                'accept' => '',
                'max' => '1',
                'max_size' => ''
            ]
        );
    }

    public function toFormField(ServiceAwareInterface $app): AbstractField
    {
        $field = $app->make(FileDragField::class)
            ->label($this->getLabel())
            ->setName($this->getLabel());

        if ($accept = trim((string) $this->data->accept)) {
            $field->accept($accept);
            $field->attr('data-accepted', $accept);
        }

        $size = (int) ($this->data->max_size ?: 10);

        if ($size) {
            $field->maxSize($size);
        }

        if ($this->data->max > 1) {
            $field->multiple(true)->maxFiles((int) $this->data->max);
        }

        return $field;
    }

    public function prepareStore(AppRequest $request, Formkit $formkit, array $data, string $ns): array
    {
        $files = $request->file($ns)[$this->getLabel()];

        $data[$this->getLabel()] = [];

        if ($this->data->max > 1) {
            /** @var UploadedFileInterface $file */
            foreach ($files as $i => $file) {
                $data[$this->getLabel()][] = $this->upload($formkit, $file);
            }
        } else {
            /** @var UploadedFileInterface $files */
            $data[$this->getLabel()][] = $this->upload($formkit, $files);
        }

        return $data;
    }

    protected function upload(Formkit $formkit, UploadedFileInterface $file): string
    {
        $filename = $file->getClientFilename();

        $contentDisposition = str_starts_with($file->getClientMediaType(), 'image')
            ? null
            : HeaderHelper::attachmentContentDisposition($filename);

        $result = $this->fileUploadService->handleFileIfUploaded(
            $file,
            'formkit/' . $formkit->getId() . '/' . tid('file') . '.{ext}',
            [
                'options' => [
                    'ContentType' => $file->getClientMediaType(),
                    'ContentDisposition' => $contentDisposition,
                    'ACL' => S3Service::ACL_PUBLIC_READ
                ]
            ]
        );

        return (string) $result?->getUri();
    }

    public function prepareViewData(array $content): array
    {
        $text = collect((array) ($content[$this->getLabel()] ?? []));

        $text = $text->filter()->mapWithKeys(
            function ($item, $i) {
                yield $i => h(
                    'div',
                    [],
                    h('a', ['href' => $item, 'target' => '_blank'], '觀看檔案 ' . $i)
                );
            }
        );

        return [(string) $text->implode("\n")];
    }

    public function prepareExportLabels(): array
    {
        $labels = [];

        if ($this->data->max > 1) {
            foreach (range(1, $this->data->max) as $i => $file) {
                $label = $this->getLabel() . '_' . ($i + 1);

                $labels[$label] = $label;
            }
        } else {
            $labels = parent::prepareExportLabels();
        }

        return $labels;
    }

    public function prepareExportData(array $content): array
    {
        $data = [];

        if ($this->data->max > 1) {
            foreach (range(1, $this->data->max) as $i => $file) {
                $data[$this->getLabel() . '_' . ($i + 1)] = $content[$this->getLabel()][$i] ?? '';
            }
        } else {
            $data = parent::prepareExportData($content);
        }

        $storage = $this->fileUploadService->getStorage();

        if ($storage instanceof LocalStorage) {
            foreach ($data as $i => $value) {
                if (!$value) {
                    continue;
                }

                $data[$i] = $this->uri->root($value);
            }
        }

        return $data;
    }
}
