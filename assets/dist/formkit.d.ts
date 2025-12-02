export declare class FormkitHandler {
    protected el: HTMLElement;
    protected uid: string;
    constructor(el: HTMLElement, uid: string);
    registerValidation(): Promise<void>;
    autoCheckOther(): void;
    toggleSelectOtherInput(): void;
}
export declare const ready: Promise<void>;
export interface FormkitModule {
    FormkitHandler: typeof FormkitHandler;
    ready: typeof ready;
}
