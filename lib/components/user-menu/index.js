import React, { useState } from "react";
import { AvatarIcon } from "../icons/avatar";
const UserMenu = ({ variant }) => {
    const [displayDropdown, setDisplayDropdown] = useState("hidden");
    const onChangeVisibleDropdown = () => {
        if (displayDropdown === "hidden") {
            setDisplayDropdown("block");
            return;
        }
        setDisplayDropdown("hidden");
    };
    return (React.createElement("div", { className: "contents" },
        React.createElement("div", { "data-testid": "user-menu-wrapper-icon", className: "flex items-center place-content-center mr-4 w-10 h-10 rounded-full cursor-pointer", onClick: onChangeVisibleDropdown },
            React.createElement(AvatarIcon, { width: "30", height: "30", variant: variant })),
        React.createElement("div", { className: `${displayDropdown} absolute mt-10 z-10 w-44 bg-white-bg rounded-l-lg divide-y divide-gray-400 shadow` },
            React.createElement("ul", { className: "text-gray-600 dark:text-primary-color font-bold" },
                React.createElement("li", { className: "cursor-pointer" },
                    React.createElement("span", { className: variant === "connexio"
                            ? `text-connexio-primary-light block py-2 px-4 hover:bg-connexio-primary-light hover:text-white rounded-tl-lg`
                            : `text-klub-primary block py-2 px-4 hover:bg-klub-primary hover:text-white rounded-tl-lg` }, "Perfil")),
                React.createElement("li", { className: "cursor-pointer" },
                    React.createElement("span", { className: variant === "connexio"
                            ? `text-connexio-primary-light block py-2 px-4 hover:bg-connexio-primary-light hover:text-white rounded-bl-lg`
                            : `text-klub-primary block py-2 px-4 hover:bg-klub-primary hover:text-white rounded-bl-lg` }, "Sair"))))));
};
export default UserMenu;
//# sourceMappingURL=index.js.map