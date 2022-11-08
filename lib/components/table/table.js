"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Table = (props) => {
    const { headers, hiddenHeaders = [], formatFn, data = [], options } = props;
    const [titleHeads, setTitleHeads] = (0, react_1.useState)(headers.map(item => Object.values(item)));
    const [keyHeads, setKeyHeads] = (0, react_1.useState)(headers.map(item => Object.keys(item)));
    const format = (key, value) => {
        return (formatFn === null || formatFn === void 0 ? void 0 : formatFn.hasOwnProperty(key)) ? formatFn[key](value) : value;
    };
    return (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "mt-8 flex flex-col" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "-my-2 -mx-4  sm:-mx-6 lg:-mx-8" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8" }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: " shadow ring-1 ring-black ring-opacity-5 md:rounded-lg" }, { children: (0, jsx_runtime_1.jsxs)("table", Object.assign({ className: "min-w-full divide-y divide-gray-300" }, { children: [(0, jsx_runtime_1.jsx)("thead", Object.assign({ className: "bg-gray-50" }, { children: (0, jsx_runtime_1.jsxs)("tr", { children: [titleHeads.map((head, index) => {
                                            if (!hiddenHeaders.includes(keyHeads[index][0])) {
                                                return (0, jsx_runtime_1.jsx)("th", Object.assign({ scope: "col", className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6" }, { children: head }), index);
                                            }
                                        }), options && (0, jsx_runtime_1.jsx)("th", { scope: "col", className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6" })] }) })), (0, jsx_runtime_1.jsx)("tbody", Object.assign({ className: "divide-y divide-gray-200 bg-white" }, { children: data.map((item, index) => {
                                    // @ts-ignore
                                    return (0, jsx_runtime_1.jsx)("tr", Object.assign({ "data-testid": 'tr-td', className: 'z-0 hover:bg-gray-100' }, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [keyHeads.map((keyH, keyIndex) => {
                                                    if (!hiddenHeaders.includes(keyH[0])) {
                                                        // @ts-ignore
                                                        const content = (item[keyH]);
                                                        return ((0, jsx_runtime_1.jsx)("td", Object.assign({ "data-testid": `test-${keyH}`, className: 'whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6' }, { children: format(keyH, content || '-') }), keyIndex));
                                                    }
                                                }), options && (0, jsx_runtime_1.jsx)("td", { children: options(item.id) })] }) }), index);
                                }) }))] })) })) })) })) }));
};
exports.default = Table;
//# sourceMappingURL=table.js.map