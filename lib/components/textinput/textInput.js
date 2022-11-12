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
import React from "react";
import { formClasses } from "../../constants/formClasses";
import Label from "../label";
export default function TextInput(_a) {
    var { id = '', label = '', type = 'text', className = '' } = _a, props = __rest(_a, ["id", "label", "type", "className"]);
    return (React.createElement("div", null,
        label && React.createElement(Label, { id: id }, label),
        React.createElement("input", Object.assign({ "data-testid": 'textinput', id: id, type: type }, props, { className: className !== null && className !== void 0 ? className : formClasses }))));
}
//# sourceMappingURL=textInput.js.map