import { FormType } from './types';
export declare function createFormkitEditor(): Promise<{
    mount: (rootContainer?: string | Element) => Promise<import('vue').ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import('vue').ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, import('vue').ComponentProvideOptions>, {}, {}, "", {}, any>>;
    fieldsTypes: Record<string, FormType>;
    addField: (type: FormType) => Promise<void>;
    app: import('vue').App<Element>;
}>;
