/// <reference types="react" />
export declare type InputType = {
    id: string;
    label?: string;
    placeholder?: string;
    value?: string;
    type?: string;
    name: string;
    disabled?: boolean;
    rules?: ((params: string | null | undefined) => (boolean | string))[];
    hasError?: (params: boolean) => void;
};
declare const Input: (props: InputType) => JSX.Element;
export default Input;
//# sourceMappingURL=Input.d.ts.map