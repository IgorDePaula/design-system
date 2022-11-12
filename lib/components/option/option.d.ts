import { ReactNode } from 'react';
export declare type MenuItemType = {
    handler: (params?: any) => void;
    icon?: string | ReactNode;
    label: string;
};
export declare type MenuType = {
    children: ReactNode;
    options: MenuItemType[];
};
export default function MenuOption(props: MenuType): JSX.Element;
//# sourceMappingURL=option.d.ts.map