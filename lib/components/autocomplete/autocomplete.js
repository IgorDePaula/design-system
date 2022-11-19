import React, { useEffect, useState } from "react";
import Label from "../label";
import { Combobox as Combo } from '@headlessui/react';
const Autocomplete = (props) => {
    const { label, selectedValue, options, rules = [], getState, disabled } = props;
    const [selected, setSelected] = useState(selectedValue);
    const [query, setQuery] = useState('');
    const validation = rules && rules.map(fn => fn(selectedValue)).filter(Boolean);
    const hasError = Boolean(validation.length);
    const classes = hasError ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-gray-500';
    const filteredOptions = query === ''
        ? options
        : options.filter((option) => {
            return option.value.includes(query.toLowerCase());
        });
    useEffect(() => {
        getState && getState(selected);
    }, [selected]);
    return (React.createElement(Combo, { value: selected, "data-testid": 'autocomplete', onChange: setSelected, disabled: disabled },
        React.createElement(Combo.Button, { disabled: disabled },
            label && React.createElement(Label, { id: 'label' }, label),
            React.createElement(Combo.Input, { "data-testid": 'combo-input', disabled: disabled, className: `block w-full rounded p-1 focus:outline-none border pr-10 text-gray-700 sm:text-sm ${classes} ${disabled ? 'cursor-not-allowed' : ''}`, onChange: (event) => setQuery(event.target.value) }),
            React.createElement(Combo.Options, null, filteredOptions.map((option, index) => React.createElement(Combo.Option, { key: index, value: option.value, disabled: option.disabled }, option.label))))));
};
export default Autocomplete;
//# sourceMappingURL=autocomplete.js.map