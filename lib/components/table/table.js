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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
var Table = function (props) {
    var headers = props.headers, _a = props.hiddenHeaders, hiddenHeaders = _a === void 0 ? [] : _a, formatFn = props.formatFn, _b = props.data, data = _b === void 0 ? [] : _b, options = props.options;
    var _c = useState(headers.map(function (item) { return Object.values(item); })), titleHeads = _c[0], setTitleHeads = _c[1];
    var _d = useState(headers.map(function (item) { return Object.keys(item); })), keyHeads = _d[0], setKeyHeads = _d[1];
    var format = function (key, value) {
        return (formatFn === null || formatFn === void 0 ? void 0 : formatFn.hasOwnProperty(key)) ? formatFn[key](value) : value;
    };
    return _jsx("div", __assign({ className: "mt-8 flex flex-col" }, { children: _jsx("div", __assign({ className: "-my-2 -mx-4  sm:-mx-6 lg:-mx-8" }, { children: _jsx("div", __assign({ className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8" }, { children: _jsx("div", __assign({ className: " shadow ring-1 ring-black ring-opacity-5 md:rounded-lg" }, { children: _jsxs("table", __assign({ className: "min-w-full divide-y divide-gray-300" }, { children: [_jsx("thead", __assign({ className: "bg-gray-50" }, { children: _jsxs("tr", { children: [titleHeads.map(function (head, index) {
                                            if (!hiddenHeaders.includes(keyHeads[index][0])) {
                                                return _jsx("th", __assign({ scope: "col", className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6" }, { children: head }), index);
                                            }
                                        }), options && _jsx("th", { scope: "col", className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6" })] }) })), _jsx("tbody", __assign({ className: "divide-y divide-gray-200 bg-white" }, { children: data.map(function (item, index) {
                                    // @ts-ignore
                                    return _jsx("tr", __assign({ "data-testid": 'tr-td', className: 'z-0 hover:bg-gray-100' }, { children: _jsxs(_Fragment, { children: [keyHeads.map(function (keyH, keyIndex) {
                                                    if (!hiddenHeaders.includes(keyH[0])) {
                                                        // @ts-ignore
                                                        var content = (item[keyH]);
                                                        return (_jsx("td", __assign({ "data-testid": "test-".concat(keyH), className: 'whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6' }, { children: format(keyH, content || '-') }), keyIndex));
                                                    }
                                                }), options && _jsx("td", { children: options(item.id) })] }) }), index);
                                }) }))] })) })) })) })) }));
};
export default Table;
//# sourceMappingURL=table.js.map