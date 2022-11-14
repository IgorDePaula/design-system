import React from "react";
import UserMenu from "../user-menu";
const Header = ({ variant }) => {
    return (React.createElement("nav", { className: "navbar navbar-expand-lg py-2 flex items-center justify-end" },
        React.createElement("div", { className: "flex justify-end flex-wrap" },
            React.createElement(UserMenu, { variant: variant }))));
};
export default Header;
//# sourceMappingURL=index.js.map