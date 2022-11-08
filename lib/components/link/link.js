"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Link(props) {
    const { icon, text, href } = props;
    return (0, jsx_runtime_1.jsxs)("a", Object.assign({ className: "group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2", href: href }, { children: [icon, " ", text] }));
}
exports.default = Link;
//# sourceMappingURL=link.js.map