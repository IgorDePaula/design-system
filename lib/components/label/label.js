"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Label(props) {
    const { id, children } = props;
    return ((0, jsx_runtime_1.jsx)("label", Object.assign({ "data-testid": 'label', htmlFor: id, className: "mb-3 block text-sm font-medium text-gray-700" }, { children: children })));
}
exports.default = Label;
//# sourceMappingURL=label.js.map