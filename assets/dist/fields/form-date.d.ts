export default function (app: any): import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: ObjectConstructor;
}>, {
    item: import('vue').Ref<{
        [x: string]: any;
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
    }, import('..').FieldEditCotent | {
        [x: string]: any;
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
    }>;
    getId: (suffix?: string) => string;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: ObjectConstructor;
}>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
