/// <reference types="react" />
export declare type RadioButtonType = {
    name: string;
    disabled?: boolean;
    hasError?: boolean;
    label?: string;
    checked?: string | number;
    options: RadioButtonOptionType[];
    position?: 'vertical' | 'horizontal';
    getChecked: (param: string | number | null) => void;
};
export declare type RadioButtonOptionType = {
    title: string;
    description?: string;
    value: number | string;
};
declare const RadioButton: (props: RadioButtonType) => JSX.Element;
export declare type OptionsProps = {
    options: RadioButtonOptionType[];
    label?: string;
    name: string;
    hasError?: boolean;
    disabled?: boolean;
    checked?: string | number | null | undefined;
    getChecked: (param: string | number | null) => void;
};
export default RadioButton;
//# sourceMappingURL=radiobutton.d.ts.map