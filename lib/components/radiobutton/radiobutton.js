import React, { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import classNames from "../../functions/classNames";
import Label from "@components/label";
const RadioButton = (props) => {
    const { label, variant, options, position = "horizontal", name, disabled, checked, isSubmiting, getValue, getError, required, } = props;
    // @ts-ignore
    return (React.createElement("div", { "data-testid": "radio" }, position == "horizontal" ? (React.createElement(Horizontal, { name: name, options: options, getValue: getValue, getError: getError, variant: variant, isSubmiting: isSubmiting, label: label, checked: checked, disabled: disabled, required: required })) : (React.createElement(Vertical, { name: name, options: options, getValue: getValue, variant: variant, getError: getError, isSubmiting: isSubmiting, label: label, checked: checked, disabled: disabled, required: required }))));
};
const Horizontal = ({ options, variant, label, name, checked, disabled, getValue, getError, isSubmiting, required, }) => {
    const [selected, setSelected] = useState(checked);
    const [hasError, setError] = useState(false);
    useEffect(() => {
        const pairValue = {};
        // @ts-ignore
        pairValue[name] = selected;
        getValue && getValue(pairValue);
        hasError && setError(false);
    }, [selected]);
    useEffect(() => {
        if (required && isSubmiting && !selected) {
            const pairError = {};
            // @ts-ignore
            pairError[name] = true;
            getError && getError(pairError);
            setError(true);
        }
        if (required && isSubmiting && selected) {
            setError(false);
        }
    }, [isSubmiting]);
    const classes = hasError
        ? `border-2 border-red-300 focus:border-red-500 rounded-lg horizontal ${disabled ? "disabled" : ""}`
        : `horizontal  ${disabled ? "disabled" : ""}`;
    const disabledClass = disabled ? "cursor-not-allowed" : "cursor-pointer ";
    return (React.createElement(RadioGroup, { value: selected, onChange: setSelected, disabled: disabled, name: name, className: classes },
        label && React.createElement(Label, { id: label }, label),
        React.createElement("div", { className: "grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4 " }, options.map((option, index) => {
            return (React.createElement(RadioGroup.Option, { key: index, value: option.value, className: variant === "connexio"
                    ? ({ checked, active }) => classNames(checked
                        ? "border-transparent bg-connexio-primary"
                        : "border-gray-200 bg-connexio-primary-light text-white", active
                        ? "border-connexio-primary ring-2 ring-connexio-primary bg-connexio-primary text-white"
                        : "", `relative flex ${disabledClass} rounded-lg border bg-connexio-primary-light text-white p-4 shadow-sm focus:outline-none`)
                    : ({ checked, active }) => classNames(checked
                        ? "border-transparent bg-klub-hover"
                        : "border-gray-200 bg-klub-primary text-white", active
                        ? "border-klub-hover ring-2 ring-klub-hover bg-klub-hover text-white"
                        : "", `relative flex ${disabledClass} rounded-lg border bg-klub-primary text-white p-4 shadow-sm focus:outline-none`) }, ({ checked, active }) => (React.createElement(React.Fragment, null,
                React.createElement("span", { className: "flex flex-1" },
                    React.createElement("span", { className: "flex flex-col" },
                        React.createElement(RadioGroup.Label, { as: "span", className: "block text-sm font-medium text-gray-900" }, option.title),
                        React.createElement(RadioGroup.Description, { as: "span", className: "mt-1 flex items-center text-sm text-gray-500" }, option.description))),
                React.createElement(CheckCircleIcon, { className: classNames(!checked ? "invisible" : "", "h-5 w-5 text-indigo-600"), "aria-hidden": "true" }),
                React.createElement("span", { className: classNames(active ? "border" : "border-2", checked ? "border-indigo-500" : "border-transparent", "pointer-events-none absolute -inset-px rounded-lg"), "aria-hidden": "true" })))));
        }))));
};
const Vertical = ({ options, variant, label, name, checked, disabled, getValue, getError, isSubmiting, required, }) => {
    const [selected, setSelected] = useState(checked);
    const [hasError, setError] = useState(false);
    useEffect(() => {
        const pairValue = {};
        // @ts-ignore
        pairValue[name] = selected;
        getValue && getValue(pairValue);
        hasError && setError(false);
    }, [selected]);
    useEffect(() => {
        if (required && isSubmiting && !selected) {
            const pairError = {};
            // @ts-ignore
            pairError[name] = true;
            getError && getError(pairError);
            setError(true);
        }
        if (required && isSubmiting && selected) {
            setError(false);
        }
    }, [isSubmiting]);
    const classes = hasError
        ? `border-2 border-red-300 focus:border-red-500 rounded-lg vertical ${disabled ? "disabled" : ""}`
        : `vertical ${disabled ? "disabled" : ""}`;
    const disabledClass = disabled ? "cursor-not-allowed" : "cursor-pointer ";
    return (React.createElement(RadioGroup, { value: selected, onChange: setSelected, disabled: disabled, name: name, className: classes },
        label && React.createElement(Label, { id: label }, label),
        React.createElement("div", { className: "space-y-4" }, options.map((option, index) => (React.createElement(RadioGroup.Option, { key: index, value: option.value, className: variant === "connexio"
                ? ({ checked, active }) => classNames(checked
                    ? "border-transparent bg-connexio-primary"
                    : "border-gray-200 bg-connexio-primary-light text-white", active
                    ? "border-connexio-primary ring-2 ring-connexio-primary bg-connexio-primary text-white"
                    : "", `relative flex ${disabledClass} rounded-lg border bg-connexio-primary-light text-white p-4 shadow-sm focus:outline-none`)
                : ({ checked, active }) => classNames(checked
                    ? "border-transparent bg-klub-hover"
                    : "border-gray-200 bg-klub-primary text-white", active
                    ? "border-klub-hover ring-2 ring-klub-hover bg-klub-hover text-white"
                    : "", `relative flex ${disabledClass} rounded-lg border bg-klub-primary text-white p-4 shadow-sm focus:outline-none`) }, ({ active, checked }) => (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "flex w-full" },
                React.createElement("span", { className: "flex flex-col text-sm w-full" },
                    React.createElement(RadioGroup.Label, { as: "span", className: "font-medium" }, option.title),
                    React.createElement(RadioGroup.Description, { as: "span", className: "text-gray-500" },
                        React.createElement("span", { className: "block sm:inline" }, option.description),
                        "")),
                React.createElement(CheckCircleIcon, { className: classNames(!checked ? "invisible" : "", "h-5 w-5"), "aria-hidden": "true" })),
            React.createElement("span", { className: classNames(active ? "border" : "border-2", checked ? "border-indigo-500" : "border-transparent", "pointer-events-none absolute  -inset-px rounded-lg"), "aria-hidden": "true" })))))))));
};
export default RadioButton;
//# sourceMappingURL=radiobutton.js.map