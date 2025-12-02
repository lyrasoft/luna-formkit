import { FormkitModule } from './formkit';
export * from './services/form-mixin';
export * from './services/registry';
export * from './types/form-field';
export declare function useFormkit(): Promise<FormkitModule>;
export declare function useFormkitEditor(): Promise<{
    mount: (rootContainer?: string | Element) => Promise<import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import('vue').ComponentProvideOptions>, {}, {}, "", {}, any>>;
    fieldsTypes: Record<string, import('./types/form-field').FormType>;
    addField: (type: import('./types/form-field').FormType) => Promise<void>;
    app: import('vue').App<Element>;
}>;
