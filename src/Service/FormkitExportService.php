<?php

declare(strict_types=1);

namespace Lyrasoft\Formkit\Service;

use Lyrasoft\Formkit\Entity\Formkit;
use Lyrasoft\Formkit\Entity\FormkitResponse;
use Lyrasoft\Formkit\Formkit\Type\AbstractFormType;
use Lyrasoft\Luna\User\UserService;
use Lyrasoft\Toolkit\Spreadsheet\PhpSpreadsheetWriter;
use Lyrasoft\Toolkit\Spreadsheet\SpreadsheetKit;
use Unicorn\Selector\ListSelector;
use Windwalker\Core\DateTime\ChronosService;
use Windwalker\Core\Language\TranslatorTrait;
use Windwalker\Data\Collection;
use Windwalker\DI\Attributes\Service;
use Windwalker\Http\Response\AttachmentResponse;

use function Windwalker\now;

#[Service]
class FormkitExportService
{
    use TranslatorTrait;

    public function __construct(protected ChronosService $chronosService, protected UserService $userService)
    {
    }

    public function export(
        Formkit $formkit,
        ListSelector $items,
        Collection $fields,
    ): AttachmentResponse {
        $items = $items->limit(0)
            ->page(1)
            ->getIterator(FormkitResponse::class);

        $excel = SpreadsheetKit::createPhpSpreadsheetWriter();

        $excel->addColumn('id', 'ID');
        // $excel->addColumn('user', '會員');
        $excel->addColumn('time', '建立時間')->setWidth(15);
        $excel->addColumn('state', '狀態');

        /** @var AbstractFormType $field */
        foreach ($fields as $field) {
            foreach ($field->prepareExportLabels() as $key => $label) {
                $excel->addColumn($key, $label)->setWidth(15);
            }
        }

        $chronosService = $this->chronosService;
        $userService = $this->userService;

        /** @var FormkitResponse $item */
        foreach ($items as $item) {
            $excel->addRow(
                function (PhpSpreadsheetWriter $row) use ($fields, $chronosService, $userService, $item) {
                    $user = $userService->load(['id' => $item->getCreatedBy()]);

                    $row->setRowCell('id', $item->getId());
                    // $row->setRowCell('user', $user?->getName() ?: '');
                    $row->setRowCell('time', $chronosService->toLocalFormat($item->getCreated()));
                    $row->setRowCell('state', $item->getState()->getTitle($this->lang));

                    $content = $item->getContent();

                    /** @var AbstractFormType $field */
                    foreach ($fields as $field) {
                        foreach ($field->prepareExportData($content) as $key => $value) {
                            $row->setRowCell((string) $key, $value);
                        }
                    }
                }
            );
        }

        $filename = sprintf(
            '[匯出] %s - %s.xlsx',
            $formkit->getTitle(),
            now('Y-m-d-H-i-s')
        );

        return $excel->toAttachmentResponse($filename);
    }
}
