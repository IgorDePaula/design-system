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
export default function Avatar(props) {
    return (_jsx("object", __assign({ className: ' h-8 w-8 overflow-hidden rounded-full ', "data-testid": "avatar", data: props.url, type: "image/jpeg" }, { children: _jsx("svg", __assign({ className: "h-full w-full text-gray-300", fill: "currentColor", viewBox: "0 0 24 24" }, { children: _jsx("path", { d: "M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" }) })) })));
}
//# sourceMappingURL=avatar.js.map