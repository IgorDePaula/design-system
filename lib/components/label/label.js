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
export default function Label(props) {
    var id = props.id, children = props.children;
    return (_jsx("label", __assign({ "data-testid": 'label', htmlFor: id, className: "mb-3 block text-sm font-medium text-gray-700" }, { children: children })));
}
//# sourceMappingURL=label.js.map