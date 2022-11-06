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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { formClasses } from "../../constants/formClasses";
import Label from "../label";
export default function TextInput(_a) {
    var _b = _a.id, id = _b === void 0 ? '' : _b, _c = _a.label, label = _c === void 0 ? '' : _c, _d = _a.type, type = _d === void 0 ? 'text' : _d, _e = _a.className, className = _e === void 0 ? '' : _e, props = __rest(_a, ["id", "label", "type", "className"]);
    return (_jsxs("div", { children: [label && _jsx(Label, __assign({ id: id }, { children: label })), _jsx("input", __assign({ "data-testid": 'textinput', id: id, type: type }, props, { className: className !== null && className !== void 0 ? className : formClasses }))] }));
}
//# sourceMappingURL=textInput.js.map