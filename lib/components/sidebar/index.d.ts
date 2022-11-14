import { ReactElement } from "react";
declare type OptionsProps = {
    label?: string;
    icon?: ReactElement;
    subMenus?: OptionsProps[];
};
declare type SidebarProps = {
    variant?: "klub" | "connexio";
    options?: OptionsProps[];
    collapsed?: boolean;
    toggleSidebar?(): void;
};
declare const Sidebar: ({ variant, options, collapsed, toggleSidebar, }: SidebarProps) => JSX.Element;
export default Sidebar;
//# sourceMappingURL=index.d.ts.map