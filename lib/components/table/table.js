import { useState } from "react";
import React from "react";
const Table = (props) => {
    const { headers, hiddenHeaders = [], formatFn, data = [], options } = props;
    const [titleHeads] = useState(headers.map(item => Object.values(item)));
    const [keyHeads] = useState(headers.map(item => Object.keys(item)));
    const format = (key, value) => {
        return (formatFn === null || formatFn === void 0 ? void 0 : formatFn.hasOwnProperty(key)) ? formatFn[key](value) : value;
    };
    return React.createElement("div", { className: "mt-8 flex flex-col" },
        React.createElement("div", { className: "-my-2 -mx-4  sm:-mx-6 lg:-mx-8" },
            React.createElement("div", { className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8" },
                React.createElement("div", { className: " shadow ring-1 ring-black ring-opacity-5 md:rounded-lg" },
                    React.createElement("table", { className: "min-w-full divide-y divide-gray-300" },
                        React.createElement("thead", { className: "bg-gray-50" },
                            React.createElement("tr", null,
                                titleHeads.map((head, index) => {
                                    if (!hiddenHeaders.includes(keyHeads[index][0])) {
                                        return React.createElement("th", { scope: "col", className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6", key: index }, head);
                                    }
                                }),
                                options && React.createElement("th", { scope: "col", className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6" }))),
                        React.createElement("tbody", { className: "divide-y divide-gray-200 bg-white" }, data.map((item, index) => {
                            // @ts-ignore
                            return React.createElement("tr", { "data-testid": 'tr-td', key: index, className: 'z-0 hover:bg-gray-100' },
                                React.createElement(React.Fragment, null,
                                    keyHeads.map((keyH, keyIndex) => {
                                        if (!hiddenHeaders.includes(keyH[0])) {
                                            // @ts-ignore
                                            const content = (item[keyH]);
                                            return (React.createElement("td", { "data-testid": `test-${keyH}`, className: 'whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6', key: keyIndex }, format(keyH, content || '-')));
                                        }
                                    }),
                                    options && React.createElement("td", null, options(item.id))));
                        })))))));
};
export default Table;
//# sourceMappingURL=table.js.map