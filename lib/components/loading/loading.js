"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const LoadingThemeEnum_1 = __importDefault(require("../../enums/LoadingThemeEnum"));
function Loading(props) {
    const { theme } = props;
    return (0, jsx_runtime_1.jsx)("div", Object.assign({ "data-testid": "loading", className: 'w-full flex justify-center items-center' }, { children: (0, jsx_runtime_1.jsxs)("svg", Object.assign({ className: `animate-spin -ml-1 mr-3 h-5 w-5 ${theme == LoadingThemeEnum_1.default.light && 'text-blue-500'}  ${theme == LoadingThemeEnum_1.default.dark && 'text-white'}`, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24" }, { children: [(0, jsx_runtime_1.jsx)("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), (0, jsx_runtime_1.jsx)("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] })) }));
}
exports.default = Loading;
//# sourceMappingURL=loading.js.map