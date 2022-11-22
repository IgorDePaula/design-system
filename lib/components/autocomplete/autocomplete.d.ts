/// <reference types="react" />
export declare type AutocompleteType = {
    label?: string;
    selectedValue?: string;
    options: AutocompleteOptionType[];
    disabled?: boolean;
    getState?: (param: string | number | undefined) => void;
    rules?: ((params: string | null | undefined) => (boolean | string))[];
    hasError?: (params: boolean) => void;
};
export declare type AutocompleteOptionType = {
    label: string;
    value: string;
    disabled?: boolean;
};
declare const Autocomplete: (props: AutocompleteType) => JSX.Element;
export default Autocomplete;
//# sourceMappingURL=autocomplete.d.ts.map