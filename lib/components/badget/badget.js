"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Badget(props) {
    const { text, variant } = props;
    const variants = {
        error: 'text-red-800 bg-red-100',
        warning: 'text-yellow-800 bg-yellow-100',
        info: 'text-cyan-800 bg-cyan-100',
        success: 'text-green-800 bg-green-100'
    };
    const colorVariant = variant == null || variants[variant] == null ? variants['success'] : variants[variant];
    return (0, jsx_runtime_1.jsx)("span", Object.assign({ "data-testid": 'badget', className: `inline-flex rounded-full  px-2 text-xs font-semibold leading-5 ${colorVariant}` }, { children: text }));
}
exports.default = Badget;
//# sourceMappingURL=badget.js.map