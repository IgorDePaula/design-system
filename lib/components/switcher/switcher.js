import React, { useEffect, useState } from "react";
import { Switch } from '@headlessui/react';
const Switcher = (props) => {
    const { label, state = false, getState = null } = props;
    const [enabled, setEnabled] = useState(state);
    useEffect(() => {
        getState && getState(enabled);
    }, [enabled]);
    return (React.createElement(Switch.Group, { "data-testid": 'switcher' },
        React.createElement("div", { className: "flex items-center" },
            label && React.createElement(Switch.Label, { className: "mr-4" }, label),
            React.createElement(Switch, { checked: enabled, onChange: setEnabled, className: `${enabled ? 'bg-blue-600' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2` },
                React.createElement("span", { className: `${enabled ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform` })))));
};
export default Switcher;
//# sourceMappingURL=switcher.js.map