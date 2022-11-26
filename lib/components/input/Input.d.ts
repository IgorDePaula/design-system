/// <reference types="react" />
export declare type InputType = {
    label?: string;
    placeholder?: string;
    value?: string;
    type?: string;
    name: string;
    disabled?: boolean;
    isSubmiting?: boolean;
    rules?: ((params: string | null | undefined) => (boolean | string))[];
    getValue?: (value: object) => void;
    getError?: (value: object) => void;
};
declare const Input: (props: InputType) => JSX.Element;
export default Input;
//# sourceMappingURL=Input.d.ts.map