import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { ChevronDoubleDownIcon } from "@heroicons/react/20/solid";
export default function MenuOption(props) {
    const { children, options = [] } = props;
    return (React.createElement("div", { className: "top-16 mr-4 ml-4 text-right " },
        React.createElement(Menu, { as: "div", className: "relative inline-block text-left  bg-white " },
            React.createElement("div", null,
                React.createElement(Menu.Button, { "data-testid": `menu-${children}`, className: "z-30 inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" },
                    "Op\u00E7\u00F5es",
                    React.createElement(ChevronDoubleDownIcon, { className: "ml-2 -mr-1 h-5 w-5 text-gray-500 hover:text-gray-800", "aria-hidden": "true" }))),
            React.createElement(Transition, { as: Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95" },
                React.createElement(Menu.Items, { className: "absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, options.map(item => {
                    return React.createElement(Menu.Item, { key: item.label },
                        React.createElement("button", { onClick: () => item.handler(children), "data-testid": `${item.label}-${children}`, className: `group flex w-full items-center rounded-md px-2 py-2 text-sm` },
                            item.icon,
                            item.label));
                }))))));
}
//# sourceMappingURL=option.js.map