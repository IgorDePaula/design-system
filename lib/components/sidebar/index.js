import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AiFillPlusCircle } from "react-icons/ai";
import { BiShoppingBag, BiMenu } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { BsArrowDownShort } from "react-icons/bs";
const user = {
    name: "Emily Selman",
    email: "emily.selman@example.com",
    imageUrl: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
    { name: "1", icon: React.createElement(CgClose, { color: "white", fontSize: 25 }) },
    { name: "2", icon: React.createElement(AiFillPlusCircle, { color: "white", fontSize: 25 }) },
    { name: "3", icon: React.createElement(BiShoppingBag, { color: "white", fontSize: 25 }) },
    { name: "4", icon: React.createElement(BsCart4, { color: "white", fontSize: 25 }) },
];
const Sidebar = ({ variant, options }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openOptionsWhenMenuClosed, setOpenOptionsWhenMenuClosed] = useState(false);
    const [expandOptions, setExpandOptions] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState();
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex h-screen overflow-y-auto" },
            React.createElement(Transition.Root, { show: mobileMenuOpen, as: Fragment },
                React.createElement(Dialog, { as: "div", className: "relative z-40 lg:hidden", onClose: setMobileMenuOpen },
                    React.createElement(Transition.Child, { as: Fragment, enter: "transition-opacity ease-linear duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "transition-opacity ease-linear duration-300", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                        React.createElement("div", { className: "fixed inset-0 bg-gray-600 bg-opacity-75" })),
                    React.createElement("div", { className: "fixed inset-0 z-40 flex" },
                        React.createElement(Transition.Child, { as: Fragment, enter: "transition ease-in-out duration-300 transform", enterFrom: "-translate-x-full", enterTo: "translate-x-0", leave: "transition ease-in-out duration-300 transform", leaveFrom: "translate-x-0", leaveTo: "-translate-x-full" },
                            React.createElement(Dialog.Panel, { className: "relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none" },
                                React.createElement(Transition.Child, { as: Fragment, enter: "ease-in-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in-out duration-300", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                                    React.createElement("div", { className: "absolute top-0 right-0 -mr-12 pt-4" },
                                        React.createElement("button", { type: "button", className: "ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white", onClick: () => setMobileMenuOpen(false) },
                                            React.createElement("span", { className: "sr-only" }, "Close sidebar"),
                                            React.createElement(XMarkIcon, { className: "h-6 w-6 text-white", "aria-hidden": "true" })))),
                                React.createElement("div", { className: "pt-5 pb-4" },
                                    React.createElement("div", { className: "flex flex-shrink-0 items-center px-4" },
                                        React.createElement("img", { className: "h-8 w-auto", src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600", alt: "Your Company" })),
                                    React.createElement("nav", { "aria-label": "Sidebar", className: "mt-5" },
                                        React.createElement("div", { className: "space-y-1 px-2" }, navigation.map((item) => (React.createElement(React.Fragment, null, item.icon)))))),
                                React.createElement("div", { className: "flex flex-shrink-0 border-t border-gray-200 p-4" },
                                    React.createElement("a", { href: "#", className: "group block flex-shrink-0" },
                                        React.createElement("div", { className: "flex items-center" },
                                            React.createElement("div", null,
                                                React.createElement("img", { className: "inline-block h-10 w-10 rounded-full", src: user.imageUrl, alt: "" })),
                                            React.createElement("div", { className: "ml-3" },
                                                React.createElement("p", { className: "text-base font-medium text-gray-700 group-hover:text-gray-900" }, user.name),
                                                React.createElement("p", { className: "text-sm font-medium text-gray-500 group-hover:text-gray-700" }, "Account Settings"))))))),
                        React.createElement("div", { className: "w-14 flex-shrink-0", "aria-hidden": "true" })))),
            React.createElement("div", { className: "hidden lg:flex lg:flex-shrink-0" },
                React.createElement("div", { className: openMenu
                        ? "flex w-[250px] flex-col ease-in-out duration-300"
                        : "flex w-20 flex-col ease-in-out duration-300" },
                    React.createElement("div", { className: variant === "connexio"
                            ? "flex min-h-0 flex-1 flex-col overflow-y-auto bg-connexio-primary-light"
                            : "flex min-h-0 flex-1 flex-col overflow-y-auto bg-klub-primary" },
                        React.createElement("div", { className: "flex-1" },
                            React.createElement("div", { className: openMenu
                                    ? "flex items-center justify-end py-4"
                                    : "flex items-center justify-center py-4", onClick: () => {
                                    setMobileMenuOpen(true);
                                    setExpandOptions(false);
                                    setOpenOptionsWhenMenuClosed(false);
                                } }, openMenu ? (React.createElement(MdClose, { fontSize: "30", color: "white", className: "cursor-pointer mr-2", onClick: () => setOpenMenu(false) })) : (React.createElement(React.Fragment, null,
                                React.createElement(BiMenu, { fontSize: "30", color: "white", className: "cursor-pointer", onClick: () => setOpenMenu(true) })))),
                            React.createElement("nav", { "aria-label": "Sidebar", className: openMenu
                                    ? "flex flex-col items-start space-y-3 ml-3"
                                    : "flex flex-col items-center space-y-3" }, options === null || options === void 0 ? void 0 : options.map((item) => {
                                var _a, _b, _c, _d;
                                return (React.createElement("div", { onClick: () => {
                                        expandOptions && selectedItem === item.id ? (setExpandOptions(prevState => !prevState)) : (setExpandOptions(true));
                                        openOptionsWhenMenuClosed && selectedItem === item.id ? (setOpenOptionsWhenMenuClosed(prevState => !prevState)) : (setOpenOptionsWhenMenuClosed(true));
                                        setSelectedItem(item.id);
                                    }, className: variant === "connexio"
                                        ? "flex items-center rounded-lg p-4 hover:bg-connexio-hover cursor-pointer"
                                        : "flex items-center rounded-lg p-4 hover:bg-klub-hover cursor-pointer" },
                                    React.createElement("div", { className: "flex" },
                                        item.icon,
                                        React.createElement("div", { className: "flex-col" },
                                            React.createElement("div", { className: "flex" },
                                                React.createElement("span", { className: openMenu
                                                        ? "flex text-white bold ml-4"
                                                        : "hidden" }, item.label),
                                                React.createElement("div", { className: openOptionsWhenMenuClosed &&
                                                        openMenu === false &&
                                                        selectedItem === item.id
                                                        ? variant === "klub"
                                                            ? "flex flex-col justify-center rounded-lg drop-shadow-2xl bg-klub-primary min-w-min p-2 absolute left-[90px]"
                                                            : "flex flex-col justify-center rounded-lg drop-shadow-2xl bg-connexio-primary-light min-w-min p-2 absolute left-[90px]"
                                                        : "hidden" }, ((_a = item.subMenus) === null || _a === void 0 ? void 0 : _a.length) &&
                                                    ((_b = item.subMenus) === null || _b === void 0 ? void 0 : _b.map((itemSubmenus, indexMenuitem) => (React.createElement("div", { key: `menuitem-sidebar-${indexMenuitem}`, className: variant === "connexio"
                                                            ? "hover:bg-connexio-hover hover:rounded p-3 text-white cursor-pointer"
                                                            : "hover:bg-klub-hover hover:rounded p-3 text-white cursor-pointer" },
                                                        React.createElement("div", { className: "flex gap-0.5" },
                                                            React.createElement("a", { href: itemSubmenus.path, target: "blank", onClick: () => setOpenOptionsWhenMenuClosed(false) },
                                                                itemSubmenus.icon,
                                                                React.createElement("span", { className: "text-sm" }, itemSubmenus.name)))))))),
                                                React.createElement("div", { className: openMenu ? "flex self-center mt-2" : "hidden" },
                                                    React.createElement(BsArrowDownShort, { fontSize: 15, color: "white", className: expandOptions && selectedItem === item.id
                                                            ? "rotate-0 ease-in-out duration-200"
                                                            : "-rotate-90 ease-in-out duration-200" }))),
                                            React.createElement("div", { className: openMenu &&
                                                    expandOptions &&
                                                    selectedItem === item.id
                                                    ? "flex flex-col mt-2"
                                                    : "hidden" }, ((_c = item.subMenus) === null || _c === void 0 ? void 0 : _c.length) &&
                                                ((_d = item.subMenus) === null || _d === void 0 ? void 0 : _d.map((itemSubmenus, indexMenuitem) => (React.createElement("div", { key: `menuitem-sidebar-${indexMenuitem}`, className: variant === "connexio"
                                                        ? "hover:bg-connexio-primary-light hover:rounded p-2 text-white cursor-pointer"
                                                        : "hover:bg-klub-primary hover:rounded p-2 text-white cursor-pointer" },
                                                    React.createElement("div", { className: "flex gap-0.5" },
                                                        React.createElement("a", { href: itemSubmenus.path, target: "blank", onClick: () => setExpandOptions(false) },
                                                            itemSubmenus.icon,
                                                            React.createElement("span", { className: "text-sm" }, itemSubmenus.name))))))))))));
                            })))))),
            React.createElement("div", { className: "flex min-w-0 flex-1 flex-col overflow-hidden" },
                React.createElement("div", { className: "lg:hidden" },
                    React.createElement("div", { className: "flex items-center justify-between bg-indigo-600 py-2 px-4 sm:px-6 lg:px-8" },
                        React.createElement("div", null,
                            React.createElement("img", { className: "h-8 w-auto", src: "https://tailwindui.com/img/logos/mark.svg?color=white", alt: "Your Company" })),
                        React.createElement("div", null,
                            React.createElement("button", { type: "button", className: "-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white", onClick: () => setMobileMenuOpen(true) },
                                React.createElement("span", { className: "sr-only" }, "Open sidebar"),
                                React.createElement(Bars3Icon, { className: "h-6 w-6", "aria-hidden": "true" })))))))));
};
export default Sidebar;
//# sourceMappingURL=index.js.map