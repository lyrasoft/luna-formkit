export declare function prepareList<T = object>(items: T[], defaultData?: Record<string, any>, uidField?: string): ({
    [x: string]: any;
} & T)[];
export declare function prepareListItem<T = object>(item: T, defaultData?: Record<string, any>, uidField?: string): {
    [x: string]: any;
} & T;
export declare function deepClone<T>(item: T): T;
