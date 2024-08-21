import '@main';

u.$ui.bootstrap.tooltip();

const formSelector = '#admin-form';

// Init Grid
u.grid(formSelector).initComponent();

// Disable on submit
u.$ui.disableOnSubmit(formSelector);

// Checkbox Multi-select
u.$ui.checkboxesMultiSelect(formSelector);

type PreviewModal = HTMLDivElement & {
  open: (route: string, options: any) => void
}

// Preview
u.$ui.iframeModal().then(() => {
  const previewModal = u.selectOne<PreviewModal>('#preview-modal');

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
