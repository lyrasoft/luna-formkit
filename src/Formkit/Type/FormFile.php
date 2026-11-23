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

        $size = $this->getMaxSize();

        if ($size) {
            $field->maxSize($size);
        }

        if ($this->data->max > 1) {
            $field->multiple(true)->maxFiles((int) $this->data->max);
        }

        return $field;
    }

    protected function getMaxFiles(): int
    {
        return max(1, (int) $this->data->max);
    }

    protected function getMaxSize(): int
    {
        return (int) ($this->data->max_size ?: 10);
    }

    public function prepareStore(AppRequest $request, Formkit $formkit, array $data, string $ns): array
    {
        $files = $request->file($ns)[$this->getLabel()] ?? [];
        $files = array_values(array_filter(is_array($files) ? $files : [$files]));

        if (count($files) > $this->getMaxFiles()) {
            throw new ValidateFailException(
                sprintf('%s 最多只能上傳 %d 個檔案', $this->getLabel(), $this->getMaxFiles())
            );
        }

        $uris = [];

        /** @var UploadedFileInterface $file */
        foreach ($files as $file) {
            $uris[] = $this->upload($formkit, $file);
        }

        if ($this->data->max > 1) {
            $data[$this->getLabel()] = $uris;
        } else {
            $data[$this->getLabel()] = $uris[0] ?? '';
        }

        return $data;
    }

    protected function upload(Formkit $formkit, UploadedFileInterface $file): string
    {
        if ($file->getSize() > $this->getMaxSize() * 1024 * 1024) {
            throw new ValidateFailException(
                sprintf('%s 檔案大小不可超過 %d MB', $this->getLabel(), $this->getMaxSize())
            );
        }

        $filename = $file->getClientFilename();
        $mediaType = $this->detectMediaType($file);

        $this->assertAccepted($file, $mediaType);

        // Only non-SVG images are rendered inline; everything else is forced to download
        $inline = str_starts_with($mediaType, 'image/') && $mediaType !== 'image/svg+xml';

        $contentDisposition = $inline
            ? null
            : HeaderHelper::attachmentContentDisposition($filename);

        $result = $this->fileUploadService->handleFileIfUploaded(
            $file,
            'formkit/' . $formkit->id . '/' . tid('file') . '.{ext}',
            [
                'options' => [
                    'ContentType' => $mediaType,
                    'ContentDisposition' => $contentDisposition,
                    'ACL' => S3Service::ACL_PUBLIC_READ
                ]
            ]
        );

        return (string) $result?->getUri();
    }

    protected function detectMediaType(UploadedFileInterface $file): string
    {
        $stream = $file->getStream();
        $stream->rewind();

        $mediaType = (new \finfo(FILEINFO_MIME_TYPE))->buffer((string) $stream->read(8192));

        $stream->rewind();

        return $mediaType ?: 'application/octet-stream';
    }

    protected function assertAccepted(UploadedFileInterface $file, string $mediaType): void
    {
        $accept = strtolower(trim((string) $this->data->accept));

        if ($accept === '') {
            return;
        }

        $extension = '.' . strtolower(pathinfo((string) $file->getClientFilename(), PATHINFO_EXTENSION));

        foreach (array_map('trim', explode(',', $accept)) as $rule) {
            if (str_starts_with($rule, '.')) {
                if ($rule === $extension) {
                    return;
                }

                continue;
            }

            if (str_ends_with($rule, '/*')) {
                if (str_starts_with($mediaType, substr($rule, 0, -1))) {
                    return;
                }

                continue;
            }

            if ($rule === $mediaType) {
                return;
            }
        }

        throw new ValidateFailException(sprintf('%s 不接受此檔案格式', $this->getLabel()));
    }

    public function prepareViewData(array $content): array
    {
        $files = collect((array) ($content[$this->getLabel()] ?? []));

        $files = $files->filter()->mapWithKeys(
            function ($item, $i) {
                $label = $this->getLabel() . '_' . ($i + 1);

                yield $label => h(
                    'div',
                    [],
                    h('a', ['href' => $item, 'target' => '_blank'], '觀看檔案 ' . $i)
                );
            }
        );

        if ($this->data->max > 1) {
            return $files->dump();
        }

        return [
            $this->getLabel() => $files->first()
        ];
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
