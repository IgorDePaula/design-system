/// <reference types="react" />
export declare type SelectType = {
    label?: string;
    selectedValue?: string;
    name: string;
    options: SelectOptionType[];
    disabled?: boolean;
    required?: boolean;
    isSubmiting?: boolean;
    getValue?: (value: object) => void;
    getError?: (value: object) => void;
};
export declare type SelectOptionType = {
    label: string;
    value: string;
    disabled?: boolean;
};
declare const Select: (props: SelectType) => JSX.Element;
export default Select;
//# sourceMappingURL=select.d.ts.map