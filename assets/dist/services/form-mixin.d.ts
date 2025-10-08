import { Ref, SetupContext } from 'vue';
import { FieldEditCotent } from '../types';
declare function useFormkitField(props: Record<string, any>, ctx: SetupContext): {
    item: Ref<{
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
    }, FieldEditCotent | {
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
};
declare namespace useFormkitField {
    var props: {
        modelValue: ObjectConstructor;
    };
}
export default useFormkitField;
