/// <reference types="react" />
export declare type ComboboxType = {
    label?: string;
    selectedValue?: string;
    options: ComboboxOptionType[];
    disabled?: boolean;
    getState?: (param: string | number | undefined) => void;
    rules?: ((params: string | null | undefined) => (boolean | string))[];
    hasError?: (params: boolean) => void;
};
export declare type ComboboxOptionType = {
    label: string;
    value: string;
    disabled?: boolean;
};
declare const Autocomplete: (props: ComboboxType) => JSX.Element;
export default Autocomplete;
//# sourceMappingURL=autocomplete.d.ts.map