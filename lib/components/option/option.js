"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@headlessui/react");
const react_2 = require("react");
const solid_1 = require("@heroicons/react/20/solid");
function MenuOption(props) {
    const { children, options = [] } = props;
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "top-16 mr-4 ml-4 text-right " }, { children: (0, jsx_runtime_1.jsxs)(react_1.Menu, Object.assign({ as: "div", className: "relative inline-block text-left  bg-white " }, { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(react_1.Menu.Button, Object.assign({ "data-testid": `menu-${children}`, className: "z-30 inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" }, { children: ["Op\u00E7\u00F5es", (0, jsx_runtime_1.jsx)(solid_1.ChevronDoubleDownIcon, { className: "ml-2 -mr-1 h-5 w-5 text-gray-500 hover:text-gray-800", "aria-hidden": "true" })] })) }), (0, jsx_runtime_1.jsx)(react_1.Transition, Object.assign({ as: react_2.Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95" }, { children: (0, jsx_runtime_1.jsx)(react_1.Menu.Items, Object.assign({ className: "absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, { children: options.map(item => {
                            return (0, jsx_runtime_1.jsx)(react_1.Menu.Item, { children: (0, jsx_runtime_1.jsxs)("button", Object.assign({ onClick: () => item.handler(children), "data-testid": `${item.label}-${children}`, className: `group flex w-full items-center rounded-md px-2 py-2 text-sm` }, { children: [item.icon, item.label] })) }, item.label);
                        }) })) }))] })) })));
}
exports.default = MenuOption;
//# sourceMappingURL=option.js.map