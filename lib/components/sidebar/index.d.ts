import { ReactElement } from "react";
declare type OptionsProps = {
    id: number;
    label?: string;
    name?: string;
    path?: string;
    icon?: ReactElement;
    subMenus?: OptionsProps[];
};
declare type SidebarProps = {
    variant?: "klub" | "connexio";
    options?: OptionsProps[];
};
declare const Sidebar: ({ variant, options }: SidebarProps) => JSX.Element;
export default Sidebar;
//# sourceMappingURL=index.d.ts.map