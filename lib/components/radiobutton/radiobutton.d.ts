/// <reference types="react" />
export declare type RadioButtonType = {
    name: string;
    disabled?: boolean;
    variant?: "connexio" | "klub";
    label?: string;
    checked?: string | number;
    options: RadioButtonOptionType[];
    position?: "vertical" | "horizontal";
    required?: boolean;
    isSubmiting?: boolean;
    getValue?: (value: object) => void;
    getError?: (value: object) => void;
};
export declare type RadioButtonOptionType = {
    title: string;
    description?: string;
    value: number | string;
};
declare const RadioButton: (props: RadioButtonType) => JSX.Element;
export declare type OptionsProps = {
    options: RadioButtonOptionType[];
    variant?: "connexio" | "klub";
    label?: string;
    name: string;
    required?: boolean;
    disabled?: boolean;
    isSubmiting?: boolean;
    checked?: string | number | null | undefined;
    getValue?: (value: object) => void;
    getError?: (value: object) => void;
};
export default RadioButton;
//# sourceMappingURL=radiobutton.d.ts.map