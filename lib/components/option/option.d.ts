import React, { ReactNode } from 'react';
export declare type MenuItemType = {
    handler: (params?: any) => void;
    icon?: string | ReactNode;
    label: string;
};
export declare type MenuType = {
    children: ReactNode;
    options: MenuItemType[];
};
declare const MenuOption: React.FunctionComponent<MenuType>;
export default MenuOption;
//# sourceMappingURL=option.d.ts.map