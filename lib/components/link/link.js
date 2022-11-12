import React from "react";
export default function Link(props) {
    const { icon, text, href } = props;
    return React.createElement("a", { className: "group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2", href: href },
        icon,
        " ",
        text);
}
//# sourceMappingURL=link.js.map