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
import { jsx as _jsx } from "react/jsx-runtime";
export default function Badget(props) {
    var text = props.text, variant = props.variant;
    var variants = {
        error: 'text-red-800 bg-red-100',
        warning: 'text-yellow-800 bg-yellow-100',
        info: 'text-cyan-800 bg-cyan-100',
        success: 'text-green-800 bg-green-100'
    };
    var colorVariant = variant == null || variants[variant] == null ? variants['success'] : variants[variant];
    return _jsx("span", __assign({ "data-testid": 'badget', className: "inline-flex rounded-full  px-2 text-xs font-semibold leading-5 ".concat(colorVariant) }, { children: text }));
}
//# sourceMappingURL=badget.js.map