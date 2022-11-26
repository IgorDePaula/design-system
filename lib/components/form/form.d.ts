/// <reference types="react" />
import { InputType } from "../input";
import { SelectType } from "../select";
import { AutocompleteType } from "../autocomplete";
import { RadioButtonType } from "../radiobutton";
import { SwitcherType } from "../switcher";
export declare type FieldType = {
    component: 'text-input' | 'switch' | 'select' | 'autocomplete' | 'radio';
};
export declare type FormType = {
    onSubmit: (data: object) => void;
    isLoading?: boolean;
    fields: (FieldType & (InputType | SelectType | AutocompleteType | RadioButtonType | SwitcherType))[];
};
declare const Form: (props: FormType) => JSX.Element;
export default Form;
//# sourceMappingURL=form.d.ts.map