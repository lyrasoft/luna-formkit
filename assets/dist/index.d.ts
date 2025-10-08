import { App } from 'vue';
import { ComponentOptionsBase } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { ComponentPublicInstance } from 'vue';

export declare interface FieldEditCotent {
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

declare class FormkitHandler {
    protected el: HTMLElement;
    protected uid: string;
    constructor(el: HTMLElement, uid: string);
    registerValidation(): Promise<void>;
    autoCheckOther(): void;
}

declare interface FormkitModule {
    FormkitHandler: typeof FormkitHandler;
    ready: typeof ready;
}

export declare interface FormType {
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

export declare interface FormTypeParams {
    type: string;
    [name: string]: any;
}

declare const ready: Promise<void>;

export declare function useFieldComponents(field?: string | Record<string, FormType['componentModule']>, component?: FormType['componentModule']): Record<string, any>;

export declare function useFormkit(): Promise<FormkitModule>;

export declare function useFormkitEditor(): Promise<{
    mount: (rootContainer?: string | Element) => Promise<ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, {}, {}, "", {}, any>>;
    fieldsTypes: Record<string, FormType>;
    addField: (type: FormType) => Promise<void>;
    app: App<Element>;
}>;

export { }


declare namespace useFormkitField {
    var props: {
        modelValue: ObjectConstructor;
    };
}
