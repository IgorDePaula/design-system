import React from "react";
export default function Button(props) {
    const { icon, text, onclick, href } = props;
    return React.createElement("button", { onClick: onclick, "data-testid": 'button', type: "submit", className: "group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" },
        React.createElement("span", { className: "absolute inset-y-0 left-0 flex items-center pl-3" }, icon),
        text);
}
//# sourceMappingURL=button.js.map