import React, { useEffect, useState } from "react";
import Label from "../label";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
const Input = (props) => {
    const { label, placeholder, value, isSubmiting = false, name, rules = [], type = 'text', disabled, getValue, getError } = props;
    const [hasError, setHasError] = useState('');
    const classes = hasError ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-gray-500';
    const [internValue, setInternValue] = useState(value);
    useEffect(() => {
        if (isSubmiting) {
            const validation = rules.map(rule => rule(internValue));
            const validated = validation.filter(item => typeof item == "boolean");
            const pairError = {};
            // @ts-ignore
            pairError[name] = internValue;
            if (validated.length != rules.length) {
                setHasError(validation[0]);
                getError && getError(pairError);
            }
            else {
                setHasError(false);
            }
        }
    }, [isSubmiting]);
    return React.createElement("div", null,
        label && React.createElement(Label, { id: label }, label),
        React.createElement("div", { className: "relative mt-1 rounded-md shadow-sm" },
            React.createElement("input", { type: type, name: name, id: name, onChange: e => {
                    const pairValue = {};
                    const value = e.target.value;
                    // @ts-ignore
                    pairValue[name] = value;
                    setInternValue(value);
                    getValue && getValue(pairValue);
                }, "data-testid": 'input', disabled: disabled, className: `block w-full rounded p-1 focus:outline-none border pr-10 text-gray-700 sm:text-sm ${classes}`, placeholder: placeholder, defaultValue: value, "aria-invalid": "true", "aria-describedby": "email-error" }),
            hasError && React.createElement("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3" },
                React.createElement(ExclamationCircleIcon, { className: "h-5 w-5 text-red-500", "aria-hidden": "true" }))),
        hasError && React.createElement("p", { className: "mt-2 text-sm text-red-600" }, hasError));
};
export default Input;
//# sourceMappingURL=Input.js.map