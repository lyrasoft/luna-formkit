import type { DefineComponent } from 'vue';

export interface FormType {
  id: string;
  type: string;
  title: string;
  group: string;
  icon: string;
  params: any;
  description: string;
  componentName: string;
  componentModuleUrl?: string | null;
  componentModule?: any;
}

export interface FormTypeParams {
  type: string;
  [name: string]: any;
}

export interface FieldEditCotent {
  class: string;
  description: string;
  disabled: boolean;
  grid_preview: boolean;
  help: string;
  label: string;
  placeholder: string;
  readonly: boolean;
  required: string;
  subtype: string;
  type: string;
  uid: string;
  validation: string;
  [name: string]: any;
}
