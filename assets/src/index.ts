import { FormkitModule } from '~formkit/formkit';

export * from '~formkit/services/form-mixin';
export * from '~formkit/services/registry';
export * from '~formkit/types/form-field';

export function useFormkit(): Promise<FormkitModule> {
  return import('~formkit/formkit');
}

export async function useFormkitEditor() {
  const { createFormkitEditor } = await import('~formkit/formkit-editor');

  return createFormkitEditor();
}
