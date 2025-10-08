import { data, injectCssToDocument, useImport, useStack, useUnicorn } from '@windwalker-io/unicorn-next';
import GridOptions from '~formkit/components/form/GridOptions.vue';
import SelectOptions from '~formkit/components/form/SelectOptions.vue';
import { useFieldComponents } from '~formkit/services/registry';
import type { FormType } from '~formkit/types';
import { createApp, defineAsyncComponent } from 'vue';
import FormkitEditorApp from '~formkit/app/FormkitEditorApp.vue';
import { VueDraggable } from 'vue-draggable-plus'
import { createBootstrap } from 'bootstrap-vue-next';
import '~formkit/services/form-mixin';

// @ts-ignore
import css from 'bootstrap-vue-next/dist/bootstrap-vue-next.css?inline';

injectCssToDocument(css);

useFieldComponents({
  'checkboxes': () => import('~formkit/fields/form-checkboxes'),
  'date': () => import('~formkit/fields/form-date'),
  'file': () => import('~formkit/fields/form-file'),
  'grid-box-scale': () => import('~formkit/fields/form-grid-box-scale'),
  'grid-radio-scale': () => import('~formkit/fields/form-grid-radio-scale'),
  'point-scale': () => import('~formkit/fields/form-point-scale'),
  'radio': () => import('~formkit/fields/form-radio'),
  'select': () => import('~formkit/fields/form-select'),
  'text': () => import('~formkit/fields/form-text'),
  'textarea': () => import('~formkit/fields/form-textarea'),
  'time': () => import('~formkit/fields/form-time'),
});

export async function createFormkitEditor() {
  const u = useUnicorn();
  const stack = useStack('uploading');
  stack.push('loading');

  FormkitEditorApp.name = 'Formkit';
  const props = data('formkit.props') || {};
  const fieldsComponents = useFieldComponents();

  const app = createApp(
    FormkitEditorApp,
    props
  );

  app.use(createBootstrap());
  app.component('draggable', VueDraggable);
  app.component('SelectOptions', SelectOptions);
  app.component('GridOptions', GridOptions);

  // Init all fields
  const types: Record<string, FormType> = props.types;
  const promises: Promise<any>[] = [];

  for (const id in types) {
    const type = props.types[id];

    promises.push(addField(type));
  }

  async function addField(type: FormType) {
    types[type.id] = type;
    u.trigger('formkit.type.added', type, app);

    const module = type.componentModule || fieldsComponents[type.id];

    if (module) {
      const component = typeof module === 'function' ? defineAsyncComponent(module) : module;

      app.component(type.componentName, component);
    } else if (type.componentModuleUrl) {
      const component = () => import(/* @vite-ignore */type.componentModuleUrl as string);

      app.component(type.componentName, defineAsyncComponent(component));
    }
  }

  async function mount(rootContainer: string | Element = 'formkit-edit-app') {
    await Promise.allSettled(promises);

    u.trigger('formkit.prepared', app);

    const vm = app.mount(rootContainer);

    u.trigger('formkit.mounted', vm, app);

    stack.pop();

    return vm;
  }

  return {
    mount,
    fieldsTypes: types,
    addField,
    app,
  };
}
