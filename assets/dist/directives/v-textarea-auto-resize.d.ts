import { Directive } from 'vue';
type AutoSizeOptions = undefined | {
    minHeight?: number;
    maxHeight?: number;
};
declare const _default: Directive<HTMLTextAreaElement, AutoSizeOptions>;
export default _default;
