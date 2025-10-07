import {
  selectOne,
  useBs5Tooltip,
  useDisableIfStackNotEmpty,
  useDisableOnSubmit,
  useFormComponent,
  useFormValidation,
  useIframeModal,
  useKeepAlive,
} from '@windwalker-io/unicorn-next';

const formSelector = '#admin-form';

useBs5Tooltip();

useFormComponent(formSelector);

useFormValidation().then(() => useDisableOnSubmit(formSelector));

useDisableIfStackNotEmpty();

useKeepAlive(location.href);

type PreviewModal = HTMLDivElement & {
  open: (route: string, options: any) => void
}

// Preview
useIframeModal().then(() => {
  const previewModal = selectOne<PreviewModal>('#preview-modal');

  if (previewModal && location.hash && location.hash.startsWith('#res-')) {
    const hash = location.hash;
    let route = previewModal.dataset.route!;

    const id = hash.replace('#res-', '');

    route = route.replace('{id}', id);

    setTimeout(() => {
      previewModal.open(route, { resize: true });
    }, 300);
  }
});
