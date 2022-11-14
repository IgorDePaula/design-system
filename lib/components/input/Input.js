import React from "react";
import Label from "../label";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
const Input = (props) => {
    const { label, placeholder, value, name, rules = [], type = 'text', disabled } = props;
    const validation = rules && rules.map(fn => fn(value)).filter(Boolean);
    const hasError = Boolean(validation.length);
    const classes = hasError ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-gray-500';
    return React.createElement("div", null,
        label && React.createElement(Label, { id: label }, label),
        React.createElement("div", { className: "relative mt-1 rounded-md shadow-sm" },
            React.createElement("input", { type: type, name: name, id: name, "data-testid": 'input', disabled: disabled, className: `block w-full rounded p-1 focus:outline-none border pr-10 text-gray-700 sm:text-sm ${classes}`, placeholder: placeholder, defaultValue: value, "aria-invalid": "true", "aria-describedby": "email-error" }),
            hasError && React.createElement("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3" },
                React.createElement(ExclamationCircleIcon, { className: "h-5 w-5 text-red-500", "aria-hidden": "true" }))),
        hasError && validation.map((item, index) => React.createElement("p", { key: index, className: "mt-2 text-sm text-red-600" }, item)));
};
export default Input;
//# sourceMappingURL=Input.js.map