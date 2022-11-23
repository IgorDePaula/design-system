import React, { useEffect, useState } from "react";
import { RadioGroup } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import classNames from "../../functions/classNames";
import Label from "@components/label";
const RadioButton = (props) => {
    const { label, options, position = 'horizontal', hasError, name, disabled, checked, getChecked } = props;
    // @ts-ignore
    return React.createElement("div", { "data-testid": 'radio' }, position == 'horizontal' ?
        React.createElement(Horizontal, { name: name, options: options, getChecked: getChecked, label: label, checked: checked, disabled: disabled, hasError: hasError }) :
        React.createElement(Vertical, { name: name, options: options, getChecked: getChecked, label: label, checked: checked, disabled: disabled, hasError: hasError }));
};
const Horizontal = ({ options, label, name, checked, hasError, disabled, getChecked }) => {
    const [selected, setSelected] = useState(checked);
    const [error, setError] = useState(hasError);
    useEffect(() => {
        if (selected) {
            setError(false);
        }
    }, [selected]);
    const classes = error ? `border-2 border-red-300 focus:border-red-500 rounded-lg horizontal ${disabled ? 'disabled' : ''}` : `horizontal ${disabled ? 'disabled' : ''}`;
    const disabledClass = disabled ? 'cursor-not-allowed' : 'cursor-pointer ';
    return (React.createElement(RadioGroup, { value: selected, onChange: e => { setSelected(e); getChecked(e); }, disabled: disabled, name: name, className: classes },
        label && React.createElement(Label, { id: label }, label),
        React.createElement("div", { className: "grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4" }, options.map((option, index) => {
            return React.createElement(RadioGroup.Option, { key: index, value: option.value, className: ({ checked, active }) => classNames(checked ? 'border-transparent' : 'border-gray-300', active ? 'border-indigo-500 ring-2 ring-indigo-500' : '', `relative flex ${disabledClass} rounded-lg border bg-white p-4 shadow-sm focus:outline-none`) }, ({ checked, active }) => (React.createElement(React.Fragment, null,
                React.createElement("span", { className: "flex flex-1" },
                    React.createElement("span", { className: "flex flex-col" },
                        React.createElement(RadioGroup.Label, { as: "span", className: "block text-sm font-medium text-gray-900" }, option.title),
                        React.createElement(RadioGroup.Description, { as: "span", className: "mt-1 flex items-center text-sm text-gray-500" }, option.description))),
                React.createElement(CheckCircleIcon, { className: classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-indigo-600'), "aria-hidden": "true" }),
                React.createElement("span", { className: classNames(active ? 'border' : 'border-2', checked ? 'border-indigo-500' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-lg'), "aria-hidden": "true" }))));
        }))));
};
const Vertical = ({ options, label, name, checked, hasError, disabled, getChecked }) => {
    const [selected, setSelected] = useState(checked);
    const [error, setError] = useState(hasError);
    useEffect(() => {
        if (selected) {
            setError(false);
        }
    }, [selected]);
    const classes = error ? `border-2 border-red-300 focus:border-red-500 rounded-lg vertical ${disabled ? 'disabled' : ''}` : `vertical ${disabled ? 'disabled' : ''}`;
    const disabledClass = disabled ? 'cursor-not-allowed' : 'cursor-pointer ';
    return (React.createElement(RadioGroup, { value: selected, onChange: e => { setSelected(e); getChecked(e); }, disabled: disabled, name: name, className: classes },
        label && React.createElement(Label, { id: label }, label),
        React.createElement("div", { className: "space-y-4" }, options.map((option, index) => (React.createElement(RadioGroup.Option, { key: index, value: option.value, className: ({ checked, active }) => classNames(checked ? 'border-transparent' : 'border-gray-300', active ? 'border-indigo-500 ring-2 ring-indigo-500' : '', `relative block ${disabledClass} rounded-lg border bg-white px-6 py-4 shadow-sm` +
                ' focus:outline-none sm:flex sm:justify-between') }, ({ active, checked }) => (React.createElement(React.Fragment, null,
            React.createElement("span", { className: "flex items-center" },
                React.createElement("span", { className: "flex flex-col text-sm" },
                    React.createElement(RadioGroup.Label, { as: "span", className: "font-medium text-gray-900" }, option.title),
                    React.createElement(RadioGroup.Description, { as: "span", className: "text-gray-500" },
                        React.createElement("span", { className: "block sm:inline" }, option.description),
                        ' ')))))))))));
};
export default RadioButton;
//# sourceMappingURL=radiobutton.js.map