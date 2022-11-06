import {formClasses} from "../../constants/formClasses";
import Label from "../label";

export default function TextInput({ id='', label='', type = 'text',  className = '', ...props }) {
    return (
        <div>
            {label && <Label id={id}>{label}</Label>}
            <input data-testid='textinput' id={id} type={type} {...props} className={className ?? formClasses} />
        </div>
    )
}
