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
export default function Button(props) {
    var icon = props.icon, text = props.text, onclick = props.onclick, href = props.href;
    return _jsxs("button", __assign({ onClick: onclick, "data-testid": 'button', type: "submit", className: "group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" }, { children: [_jsx("span", __assign({ className: "absolute inset-y-0 left-0 flex items-center pl-3" }, { children: icon })), text] }));
}
//# sourceMappingURL=button.js.map