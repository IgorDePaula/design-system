import React, { Fragment, useEffect, useState } from "react";
import Label from "../label";
import { Listbox } from '@headlessui/react';
const Select = (props) => {
    const { label, selectedValue, options, rules = [], getState, disabled } = props;
    const [selected, setSelected] = useState(selectedValue);
    const validation = rules && rules.map(fn => fn(selectedValue)).filter(Boolean);
    const hasError = Boolean(validation.length);
    const classes = hasError ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-gray-500';
    useEffect(() => {
        getState && getState(selected);
    }, [selected]);
    return (React.createElement(Listbox, { as: Fragment, value: selected, onChange: setSelected, disabled: disabled },
        label && React.createElement(Label, { id: 'label' }, label),
        React.createElement(Listbox.Button, { as: 'div', className: `block w-full rounded p-1 focus:outline-none border pr-10 text-gray-700 sm:text-sm ${classes} ${disabled ? 'cursor-not-allowed' : ''}` }, selected),
        React.createElement(Listbox.Options, { as: 'div' }, options.map((option, index) => (React.createElement(Listbox.Option, { key: index, value: option.value, disabled: option.disabled, as: 'div' }, option.label))))));
};
export default Select;
//# sourceMappingURL=select.js.map