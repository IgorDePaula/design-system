import React, { useEffect, useState } from "react";
import { Switch } from '@headlessui/react';
import Label from "@components/label";
const Switcher = (props) => {
    const { label, name, isSubmiting = false, required = false, state = false, getError, getValue = null } = props;
    const [hasError, setError] = useState(false);
    const [enabled, setEnabled] = useState(state);
    useEffect(() => {
        const pairValue = {};
        // @ts-ignore
        pairValue[name] = enabled;
        getValue && getValue(pairValue);
        hasError && setError(false);
    }, [enabled]);
    useEffect(() => {
        if (required && isSubmiting && !enabled) {
            const pairError = {};
            // @ts-ignore
            pairError[name] = true;
            getError && getError(pairError);
            setError(true);
        }
        if (required && isSubmiting && enabled) {
            setError(false);
        }
    }, [isSubmiting]);
    return (React.createElement("div", { "data-testid": "switcher" },
        React.createElement(Switch.Group, null,
            React.createElement(React.Fragment, null,
                React.createElement("div", { className: 'flex items-center' },
                    label && React.createElement(Label, { id: label, className: 'mr-4' }, label),
                    React.createElement(Switch, { checked: enabled, onChange: setEnabled, className: `${enabled ? 'bg-blue-600' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2` },
                        React.createElement("span", { className: `${enabled ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform` }))),
                hasError && React.createElement("p", { className: "mt-2 text-sm text-red-600" }, "Campo obrigat\u00F3rio!")))));
};
export default Switcher;
//# sourceMappingURL=switcher.js.map