import { FormType } from '~formkit/types';

const fieldComponents: Record<string, FormType['componentModule']> = {};

export function useFieldComponents(field?: string | Record<string, FormType['componentModule']>, component?: FormType['componentModule']) {
  if (typeof field === 'object') {
    Object.assign(fieldComponents, field);
  } else if (typeof field === 'string' && component) {
    fieldComponents[field] = component;
  }

  return fieldComponents;
}
