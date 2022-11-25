import React from "react";
import Loading from "@components/loading";
const Button = (props) => {
    const { icon, text, onclick, href, isLoading = false } = props;
    const handleClick = () => {
        !isLoading && onclick();
    };
    return (React.createElement("button", { onClick: handleClick, "data-testid": "button", type: "submit", className: `group relative flex w-full justify-center rounded-md border border-transparent ${isLoading ? "cursor-not-allowed" : ""} bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2` },
        icon && !isLoading && (React.createElement("span", { className: "absolute inset-y-0 left-0 flex items-center pl-3" }, icon)),
        isLoading && React.createElement(Loading, { theme: "dark" }),
        text));
};
export default Button;
//# sourceMappingURL=button.js.map