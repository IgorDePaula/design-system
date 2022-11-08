"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const formClasses_1 = require("../../constants/formClasses");
const label_1 = __importDefault(require("../label"));
function TextInput(_a) {
    var { id = '', label = '', type = 'text', className = '' } = _a, props = __rest(_a, ["id", "label", "type", "className"]);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [label && (0, jsx_runtime_1.jsx)(label_1.default, Object.assign({ id: id }, { children: label })), (0, jsx_runtime_1.jsx)("input", Object.assign({ "data-testid": 'textinput', id: id, type: type }, props, { className: className !== null && className !== void 0 ? className : formClasses_1.formClasses }))] }));
}
exports.default = TextInput;
//# sourceMappingURL=textInput.js.map