import React, { Fragment, useEffect, useState } from "react";
import Label from "../label";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
const Select = (props) => {
    const variantFocus = props.variant === "connexio"
        ? "focus:border-connexio-primary-light"
        : "focus:border-klub-primary";
    const { label, name, variant, selectedValue, options, isSubmiting, required, getValue, getError, disabled, } = props;
    const [selected, setSelected] = useState(selectedValue);
    const [hasError, setError] = useState(false);
    const classes = hasError
        ? "border-red-300 focus:border-red-500"
        : "border-gray-300 focus:border-gray-500";
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
    return (React.createElement("div", null,
        React.createElement(Listbox, { value: selected, onChange: setSelected, disabled: disabled },
            label && React.createElement(Label, { id: label }, label),
            React.createElement(Listbox.Button, { className: `${variantFocus} relative w-full h-10 rounded border bg-white py-2 pl-3 pr-10 text-left  ${classes} ${disabled ? "cursor-not-allowed" : ""} sm:text-sm` },
                React.createElement("span", { className: "block truncate" }, selected),
                React.createElement("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" },
                    React.createElement(ChevronDownIcon, { className: "h-5 w-5 text-gray-500", "aria-hidden": "true" }))),
            React.createElement(Transition, { as: Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                React.createElement(Listbox.Options, { className: variant === "connexio"
                        ? "absolute mt-1 w-fit z-50  overflow-auto ring-1 ring-connexio-primary-light rounded-md bg-white outline-none border-none py-1 text-base shadow-lg  focus:outline-none sm:text-sm"
                        : "absolute mt-1 w-fit z-50  overflow-auto ring-1 ring-klub-primary rounded-md bg-white outline-none border-none py-1 text-base shadow-lg  focus:outline-none sm:text-sm" }, options.map((option, index) => (React.createElement(Listbox.Option, { key: index, className: ({ active }) => `relative ${disabled ? "cursor-not-allowed" : "cursor-pointer"} select-none py-2 pl-3 pr-4 ${active ? "bg-gray-100 text-gray-900" : "text-gray-900"}`, value: option.value }, ({ selected }) => (React.createElement(React.Fragment, null,
                    React.createElement("span", { className: `block truncate ${disabled ? "cursor-not-allowed" : ""} ${selected ? "font-medium" : "font-normal"}` }, option.label),
                    selected ? (React.createElement("span", { className: `  inset-y-0 left-0 flex items-center pl-3 text-gray-600 ${disabled ? "cursor-not-allowed" : ""}` })) : null)))))))),
        hasError && (React.createElement("p", { className: "mt-2 text-sm text-red-600" }, "Campo obrigat\u00F3rio!"))));
};
export default Select;
//# sourceMappingURL=select.js.map