import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { PublicProps } from 'vue';
import { Ref } from 'vue';

declare function (app: any): DefineComponent<ExtractPropTypes<    {
modelValue: ObjectConstructor;
}>, {
item: Ref<    {
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
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
modelValue: ObjectConstructor;
}>> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
export default default_2;

declare interface FieldEditCotent {
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

export { }


declare namespace useFormkitField {
    var props: {
        modelValue: ObjectConstructor;
    };
}
