"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Button(props) {
    const { icon, text, onclick, href } = props;
    return (0, jsx_runtime_1.jsxs)("button", Object.assign({ onClick: onclick, "data-testid": 'button', type: "submit", className: "group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: "absolute inset-y-0 left-0 flex items-center pl-3" }, { children: icon })), text] }));
}
exports.default = Button;
//# sourceMappingURL=button.js.map