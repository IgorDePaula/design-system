import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { BsArrowDownShort } from "react-icons/bs";
const Sidebar = ({ variant, options }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [openOptionsWhenMenuClosed, setOpenOptionsWhenMenuClosed] = useState(false);
    const [expandOptions, setExpandOptions] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState();
    const alignIcons = openMenu ? "justify-start" : "justify-center";
    const handleChangeMobileMenu = () => {
        setMobileMenuOpen((prevState) => !prevState);
        setIsMobile((prevState) => !prevState);
    };
    const handleOpenOption = (item) => () => {
        expandOptions && selectedItem === item.id
            ? setExpandOptions((prevState) => !prevState)
            : setExpandOptions(true);
        openOptionsWhenMenuClosed && selectedItem === item.id
            ? setOpenOptionsWhenMenuClosed((prevState) => !prevState)
            : setOpenOptionsWhenMenuClosed(true);
        setSelectedItem(item.id);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex h-screen overflow-y-auto" },
            React.createElement(Transition.Root, { show: mobileMenuOpen, as: Fragment },
                React.createElement(Dialog, { as: "div", className: "relative z-40 lg:hidden", onClose: setMobileMenuOpen },
                    React.createElement(Transition.Child, { as: Fragment, enter: "transition-opacity ease-linear duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "transition-opacity ease-linear duration-300", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                        React.createElement("div", { className: "fixed inset-0 bg-gray-600 bg-opacity-75" })),
                    React.createElement("div", { className: "fixed inset-0 z-40 flex" },
                        React.createElement(Transition.Child, { as: Fragment, enter: "transition ease-in-out duration-300 transform", enterFrom: "-translate-x-full", enterTo: "translate-x-0", leave: "transition ease-in-out duration-300 transform", leaveFrom: "translate-x-0", leaveTo: "-translate-x-full" },
                            React.createElement(Dialog.Panel, { className: variant === "klub"
                                    ? "relative flex w-full max-w-xs flex-1 flex-col bg-klub-primary focus:outline-none"
                                    : "relative flex w-full max-w-xs flex-1 flex-col bg-connexio-primary-light focus:outline-none" },
                                React.createElement("div", { className: "self-end" },
                                    React.createElement("button", { type: "button", "data-testid": "close-mobile-menu", className: "ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none", onClick: handleChangeMobileMenu },
                                        React.createElement(MdClose, { fontSize: "30", color: "white", className: "cursor-pointer mr-2 mt-2" }))),
                                React.createElement("nav", { "aria-label": "Sidebar", className: variant === "klub"
                                        ? "flex flex-col items-start space-y-3 w-full mx-auto mt-5 "
                                        : "flex flex-col items-start space-y-3 w-full mx-auto mt-5 " }, options === null || options === void 0 ? void 0 : options.map((item) => {
                                    var _a, _b, _c, _d;
                                    return (React.createElement("div", { "data-testid": "item-option", onClick: handleOpenOption(item), className: variant === "connexio"
                                            ? "flex items-center p-4 w-full text-white cursor-pointer "
                                            : "flex items-center p-4 w-full text-white cursor-pointer " },
                                        React.createElement("div", { className: "flex" },
                                            item.icon,
                                            React.createElement("div", { className: "flex-col" },
                                                React.createElement("div", { className: "flex-col" },
                                                    React.createElement("div", { className: "flex" },
                                                        React.createElement("span", { className: "flex  bold ml-4 text-xl" }, item.label),
                                                        React.createElement(BsArrowDownShort, { fontSize: 20, className: expandOptions && selectedItem === item.id
                                                                ? "mt-1 rotate-0 ease-in-out duration-200"
                                                                : "mt-1 -rotate-90 ease-in-out duration-200" })),
                                                    React.createElement("div", { className: openOptionsWhenMenuClosed &&
                                                            openMenu === false &&
                                                            selectedItem === item.id
                                                            ? "flex flex-col"
                                                            : "hidden" }, ((_a = item.subMenus) === null || _a === void 0 ? void 0 : _a.length) &&
                                                        ((_b = item.subMenus) === null || _b === void 0 ? void 0 : _b.map((itemSubmenus, indexMenuitem) => (React.createElement("div", { key: `menuitem-sidebar-${indexMenuitem}`, className: variant === "connexio"
                                                                ? " ml-2 self-start w-full rounded-lg   p-4 cursor-pointer"
                                                                : "ml-2 self-start w-full rounded-lg  p-4   cursor-pointer" },
                                                            React.createElement("div", { className: "flex gap-0.5" },
                                                                React.createElement("a", { "data-testid": "anchor-submenu", href: itemSubmenus.path, target: "blank", onClick: () => setOpenOptionsWhenMenuClosed(false) },
                                                                    itemSubmenus.icon,
                                                                    React.createElement("span", { className: "text-sm" }, itemSubmenus.name)))))))),
                                                    React.createElement("div", { className: openMenu && isMobile === false
                                                            ? "flex self-center"
                                                            : "hidden" },
                                                        React.createElement(BsArrowDownShort, { fontSize: 15, className: expandOptions && selectedItem === item.id
                                                                ? "rotate-0 ease-in-out duration-200"
                                                                : "-rotate-90 ease-in-out duration-200" }))),
                                                React.createElement("div", { className: openMenu &&
                                                        expandOptions &&
                                                        selectedItem === item.id
                                                        ? "flex flex-col"
                                                        : "hidden" }, ((_c = item.subMenus) === null || _c === void 0 ? void 0 : _c.length) &&
                                                    ((_d = item.subMenus) === null || _d === void 0 ? void 0 : _d.map((itemSubmenus, indexMenuitem) => (React.createElement("div", { key: `menuitem-sidebar-${indexMenuitem}`, className: variant === "connexio"
                                                            ? "  hover:rounded p-2 cursor-pointer duration-700"
                                                            : " hover:rounded p-2 cursor-pointer duration-700" },
                                                        React.createElement("div", { className: "flex gap-0.5" },
                                                            React.createElement("a", { href: itemSubmenus.path, target: "blank", onClick: () => setExpandOptions(false) },
                                                                itemSubmenus.icon,
                                                                React.createElement("span", { className: "text-sm" }, itemSubmenus.name))))))))))));
                                })))),
                        React.createElement("div", { className: "w-14 flex-shrink-0", "aria-hidden": "true" })))),
            React.createElement("div", { className: "hidden lg:flex lg:flex-shrink-0" },
                React.createElement("div", { className: openMenu
                        ? "flex w-[250px] flex-col ease-in-out duration-200"
                        : "flex w-20 flex-col ease-in-out duration-200" },
                    React.createElement("div", { className: variant === "connexio"
                            ? "flex min-h-0 flex-1 flex-col overflow-y-auto bg-connexio-primary-light text-white  "
                            : "flex min-h-0 flex-1 flex-col overflow-y-auto bg-klub-primary text-white  " },
                        React.createElement("div", { className: "flex-1" },
                            React.createElement("div", { className: openMenu
                                    ? "flex text-white items-center justify-end py-4"
                                    : "flex text-white items-center justify-center py-4", onClick: () => {
                                    //setMobileMenuOpen(true);
                                    setExpandOptions(false);
                                    setOpenOptionsWhenMenuClosed(false);
                                } }, openMenu ? (React.createElement(MdClose, { "data-testid": "clickCloseMenu", fontSize: "30", className: variant === "connexio"
                                    ? "cursor-pointer mr-2 hover:bg-white hover:text-connexio-primary-light duration-700 rounded-md"
                                    : "cursor-pointer mr-2 hover:bg-white hover:text-klub-primary duration-700 rounded-md", onClick: () => setOpenMenu(false) })) : (React.createElement(React.Fragment, null,
                                React.createElement(BiMenu, { "data-testid": "clickOpenMenu", fontSize: "30", className: variant === "connexio"
                                        ? "cursor-pointer mr-2 hover:bg-white hover:text-connexio-primary-light duration-700 rounded-md"
                                        : "cursor-pointer mr-2 hover:bg-white hover:text-klub-primary duration-700 rounded-md", onClick: () => setOpenMenu(true) })))),
                            React.createElement("nav", { "aria-label": "Sidebar", className: openMenu
                                    ? "flex flex-col items-start"
                                    : "flex flex-col items-center" }, options === null || options === void 0 ? void 0 : options.map((item) => {
                                var _a, _b, _c, _d;
                                return (React.createElement("div", { "data-testid": "option-menu", onClick: handleOpenOption(item), className: variant === "connexio"
                                        ? `flex ${alignIcons} items-center w-full p-4 text-white hover:bg-white hover:text-connexio-primary-light  duration-700 hover:cursor-pointer`
                                        : `flex ${alignIcons} items-center w-full p-4 text-white hover:bg-white hover:text-klub-primary duration-700 hover:cursor-pointer` },
                                    React.createElement("div", { className: "flex" },
                                        item.icon,
                                        React.createElement("div", { className: "flex-col" },
                                            React.createElement("div", { className: "flex" },
                                                React.createElement("span", { className: openMenu ? "flex bold ml-4" : "hidden" }, item.label),
                                                React.createElement("div", { className: openOptionsWhenMenuClosed &&
                                                        openMenu === false &&
                                                        selectedItem === item.id
                                                        ? variant === "klub"
                                                            ? "flex flex-col justify-center rounded-md text-white drop-shadow-2xl  bg-klub-primary min-w-min p-1 absolute left-[90px]"
                                                            : "flex flex-col justify-center rounded-md text-white drop-shadow-2xl bg-connexio-primary-light   min-w-min p-1 absolute left-[90px]"
                                                        : "hidden" }, ((_a = item.subMenus) === null || _a === void 0 ? void 0 : _a.length) &&
                                                    ((_b = item.subMenus) === null || _b === void 0 ? void 0 : _b.map((itemSubmenus, indexMenuitem) => (React.createElement("div", { key: `menuitem-sidebar-${indexMenuitem}`, className: variant === "connexio"
                                                            ? "hover:bg-white hover:text-connexio-primary-light rounded-sm duration-700 p-2 cursor-pointer"
                                                            : "hover:bg-white hover:text-klub-primary duration-700 rounded-sm p-2  cursor-pointer" },
                                                        React.createElement("div", { className: "flex gap-0.5" },
                                                            React.createElement("a", { "data-testid": "anchor-submenu", href: itemSubmenus.path, target: "blank", onClick: () => setOpenOptionsWhenMenuClosed(false) },
                                                                itemSubmenus.icon,
                                                                React.createElement("span", { className: "text-sm m-2" }, itemSubmenus.name)))))))),
                                                React.createElement("div", { className: openMenu ? "flex self-center" : "hidden" },
                                                    React.createElement(BsArrowDownShort, { fontSize: 15, className: expandOptions && selectedItem === item.id
                                                            ? "rotate-0 ease-in-out duration-200"
                                                            : "-rotate-90 ease-in-out duration-200" }))),
                                            React.createElement("div", { className: openMenu &&
                                                    expandOptions &&
                                                    selectedItem === item.id
                                                    ? "flex flex-col mt-3"
                                                    : "hidden" }, ((_c = item.subMenus) === null || _c === void 0 ? void 0 : _c.length) &&
                                                ((_d = item.subMenus) === null || _d === void 0 ? void 0 : _d.map((itemSubmenus, indexMenuitem) => (React.createElement("div", { key: `menuitem-sidebar-${indexMenuitem}`, className: variant === "connexio"
                                                        ? "hover:bg-gray-100 rounded p-1  cursor-pointer hover:duration-700"
                                                        : "hover:bg-gray-100 rounded p-1  cursor-pointer hover:duration-700" },
                                                    React.createElement("div", { className: variant === "connexio"
                                                            ? "flex gap-0.5 p-1"
                                                            : "flex gap-0.5 p-1" },
                                                        React.createElement("a", { "data-testid": "anchor-submenu", href: itemSubmenus.path, target: "blank", onClick: () => setExpandOptions(false) },
                                                            itemSubmenus.icon,
                                                            React.createElement("span", { className: "text-sm m-2" }, itemSubmenus.name))))))))))));
                            })))))),
            React.createElement("div", { className: "flex min-w-0 flex-1 flex-col overflow-hidden" },
                React.createElement("div", { className: "lg:hidden" },
                    React.createElement("div", { className: "flex items-center justify-between  py-2 px-4 sm:px-6 lg:px-8" },
                        React.createElement("div", null,
                            React.createElement("img", { className: "h-8 w-auto", src: "https://tailwindui.com/img/logos/mark.svg?color=white", alt: "Your Company" })),
                        React.createElement("div", null,
                            React.createElement("button", { "data-testid": "open-mobile-menu", type: "button", className: variant === "klub"
                                    ? "-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md  text-klub-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    : "-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md  text-connexio-primary-light  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white", onClick: handleChangeMobileMenu },
                                React.createElement(Bars3Icon, { className: "h-6 w-6", "aria-hidden": "true" })))))))));
};
export default Sidebar;
//# sourceMappingURL=index.js.map