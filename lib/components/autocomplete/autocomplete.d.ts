/// <reference types="react" />
export declare type AutocompleteType = {
    label?: string;
    name: string;
    selectedValue?: string;
    options: AutocompleteOptionType[];
    disabled?: boolean;
    required?: boolean;
    isSubmiting?: boolean;
    getValue?: (value: object) => void;
    getError?: (value: object) => void;
};
export declare type AutocompleteOptionType = {
    label: string;
    value: string;
    disabled?: boolean;
};
declare const Autocomplete: (props: AutocompleteType) => JSX.Element;
export default Autocomplete;
//# sourceMappingURL=autocomplete.d.ts.map