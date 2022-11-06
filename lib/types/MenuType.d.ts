import { ReactNode } from "react";
interface MenuItemType {
    handler: (params?: any) => void;
    icon?: string | ReactNode;
    label: string;
}
declare type MenuType = {
    children: ReactNode;
    options: MenuItemType[];
};
export default MenuType;
//# sourceMappingURL=MenuType.d.ts.map