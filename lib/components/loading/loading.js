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
import LoadingThemeEnum from "../../enums/LoadingThemeEnum";
export default function Loading(props) {
    var theme = props.theme;
    return _jsx("div", __assign({ "data-testid": "loading", className: 'w-full flex justify-center items-center' }, { children: _jsxs("svg", __assign({ className: "animate-spin -ml-1 mr-3 h-5 w-5 ".concat(theme == LoadingThemeEnum.light && 'text-blue-500', "  ").concat(theme == LoadingThemeEnum.dark && 'text-white'), xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24" }, { children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] })) }));
}
//# sourceMappingURL=loading.js.map