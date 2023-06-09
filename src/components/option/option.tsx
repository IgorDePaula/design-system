import { Menu, Transition } from '@headlessui/react'
import React, {Fragment, ReactNode} from 'react'
import { ChevronDoubleDownIcon } from "@heroicons/react/20/solid";

export type MenuItemType = {
    handler: (params?:any) => void,
    icon?: string | ReactNode,
    label: string
}

export type MenuType = {
    children: ReactNode,
    options: MenuItemType[]
}
const MenuOption: React.FunctionComponent<MenuType> = (props: MenuType) => {
const {children, options=[]} = props
    return (
        <div className="top-16 mr-4 ml-4 text-right ">
            <Menu as="div" className="relative inline-block text-left  bg-white ">
                <div>
                    <Menu.Button data-testid={`menu-${children}`} className="z-30 inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        Opções
                        <ChevronDoubleDownIcon
                            className="ml-2 -mr-1 h-5 w-5 text-gray-500 hover:text-gray-800"
                            aria-hidden="true"
                        />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                        {options.map(item=>{
                            return <Menu.Item key={item.label}>

                                <a onClick={()=>item.handler(children)} data-testid={`${item.label}-${children}`}
                                        className={`group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                    {item.icon}
                                    {item.label}
                                </a>
                            </Menu.Item>})}

                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}
export default MenuOption
