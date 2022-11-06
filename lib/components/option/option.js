var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDoubleDownIcon } from "@heroicons/react/20/solid";
export default function MenuOption(props) {
    var children = props.children, _a = props.options, options = _a === void 0 ? [] : _a;
    return (_jsx("div", __assign({ className: "top-16 mr-4 ml-4 text-right " }, { children: _jsxs(Menu, __assign({ as: "div", className: "relative inline-block text-left  bg-white " }, { children: [_jsx("div", { children: _jsxs(Menu.Button, __assign({ "data-testid": "menu-".concat(children), className: "z-30 inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" }, { children: ["Op\u00E7\u00F5es", _jsx(ChevronDoubleDownIcon, { className: "ml-2 -mr-1 h-5 w-5 text-gray-500 hover:text-gray-800", "aria-hidden": "true" })] })) }), _jsx(Transition, __assign({ as: Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95" }, { children: _jsx(Menu.Items, __assign({ className: "absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, { children: options.map(function (item) {
                            return _jsx(Menu.Item, { children: _jsxs("button", __assign({ onClick: function () { return item.handler(children); }, "data-testid": "".concat(item.label, "-").concat(children), className: "group flex w-full items-center rounded-md px-2 py-2 text-sm" }, { children: [item.icon, item.label] })) }, item.label);
                        }) })) }))] })) })));
}
//# sourceMappingURL=option.js.map