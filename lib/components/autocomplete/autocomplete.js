import React, { useEffect, useState } from "react";
import Label from "../label";
import { Combobox as Combo } from '@headlessui/react';
const Autocomplete = (props) => {
    const { label, selectedValue, options, name, required, getValue, getError, isSubmiting, disabled } = props;
    const [selected, setSelected] = useState(selectedValue);
    const [query, setQuery] = useState('');
    const [hasError, setError] = useState(false);
    const classes = hasError ? 'border-red-300 focus:border-red-500' : 'border-gray-300 focus:border-gray-500';
    const filteredOptions = query === ''
        ? options
        : options.filter((option) => {
            return option.value.toLowerCase().includes(query.toLowerCase());
        });
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
    return (React.createElement(Combo, { value: selected, "data-testid": 'autocomplete', onChange: setSelected, disabled: disabled },
        React.createElement(Combo.Button, { disabled: disabled, className: 'relative w-full text-left' },
            label && React.createElement(Label, { id: 'label' }, label),
            React.createElement(Combo.Input, { "data-testid": 'combo-input', disabled: disabled, className: `block w-full rounded p-1 focus:outline-none border pr-10 text-gray-700 sm:text-sm ${classes} ${disabled ? 'cursor-not-allowed' : ''}`, onChange: (event) => setQuery(event.target.value) }),
            React.createElement(Combo.Options, null, filteredOptions.map((option, index) => React.createElement(Combo.Option, { className: 'relative bg-white z-50', key: index, value: option.value, disabled: option.disabled }, option.label))))));
};
export default Autocomplete;
//# sourceMappingURL=autocomplete.js.map