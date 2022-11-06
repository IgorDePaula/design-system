import React, {ReactNode} from "react";

interface MenuItemType {
    handler: (params?:any) => void,
    icon?: string | ReactNode,
    label: string
}

type MenuType = {
    children: ReactNode,
    options: MenuItemType[]
}

export default MenuType
