import React from "react";
import { Menu, MenuItem, ProSidebarProvider, Sidebar as SidebarLib, SubMenu, } from "react-pro-sidebar";
import { BiMenu } from "react-icons/bi";
const Sidebar = ({ variant = "connexio", options, collapsed, toggleSidebar, }) => {
    return (React.createElement(ProSidebarProvider, null,
        React.createElement(SidebarLib, { backgroundColor: "bg-black", className: variant === "connexio"
                ? "h-screen text-white bg-connexio-primary-light"
                : "h-screen text-white bg-klub-primary", defaultCollapsed: collapsed },
            React.createElement("div", { className: collapsed
                    ? "flex pt-2 mr-2 mb-2 align-items-center justify-center"
                    : "flex pt-2 mr-2 mb-2 align-items-center justify-end", onClick: toggleSidebar },
                React.createElement(BiMenu, { fontSize: "30", color: "white", className: variant === "connexio"
                        ? "hover:duration-700 rounded cursor-pointer"
                        : "hover:duration-700 rounded cursor-pointer" })),
            React.createElement(Menu, { className: "text-white" }, options === null || options === void 0 ? void 0 : options.map((itemOptions, indexSubmenu) => {
                var _a, _b;
                return (React.createElement(SubMenu, { key: `subitem-sidebar-${indexSubmenu}`, label: itemOptions.label, className: variant === "connexio"
                        ? "hover:text-connexio-primary-light hover:bg-white"
                        : "hover:text-klub-primary hover:bg-white", icon: itemOptions.icon }, ((_a = itemOptions.subMenus) === null || _a === void 0 ? void 0 : _a.length) &&
                    ((_b = itemOptions.subMenus) === null || _b === void 0 ? void 0 : _b.map((itemSubmenus, indexMenuitem) => (React.createElement(MenuItem, { key: `menuitem-sidebar-${indexMenuitem}`, className: variant === "connexio"
                            ? "bg-connexio-primary-light text-white hover:bg-white hover:text-connexio-primary-light"
                            : "bg-klub-primary text-white hover:bg-white hover:text-klub-primary", icon: itemSubmenus.icon }, itemSubmenus.label))))));
            })))));
};
export default Sidebar;
//# sourceMappingURL=index.js.map