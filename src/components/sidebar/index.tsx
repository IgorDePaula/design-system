import React, { ReactElement } from "react";
import {
  Menu,
  MenuItem,
  ProSidebarProvider,
  Sidebar as SidebarLib,
  SubMenu,
} from "react-pro-sidebar";
import { BiMenu } from "react-icons/bi";

type OptionsProps = {
  label?: string;
  icon?: ReactElement;
  subMenus?: OptionsProps[];
};

type SidebarProps = {
  variant?: "klub" | "connexio";
  options?: OptionsProps[];
  collapsed?: boolean;
  toggleSidebar?(): void;
};

const Sidebar = ({
  variant = "connexio",
  options,
  collapsed,
  toggleSidebar,
}: SidebarProps) => {
  return (
    <ProSidebarProvider>
      <SidebarLib
        backgroundColor="bg-black"
        className={
          variant === "connexio"
            ? "h-screen text-white bg-connexio-primary-light"
            : "h-screen text-white bg-klub-primary"
        }
        defaultCollapsed={collapsed}
      >
        <div
          className={
            collapsed
              ? "flex pt-2 mr-2 mb-2 align-items-center justify-center"
              : "flex pt-2 mr-2 mb-2 align-items-center justify-end"
          }
          onClick={toggleSidebar}
        >
          <BiMenu
            fontSize="30"
            color="white"
            className={
              variant === "connexio"
                ? "hover:duration-700 rounded cursor-pointer"
                : "hover:duration-700 rounded cursor-pointer"
            }
          />
        </div>
        <Menu className="text-white">
          {options?.map((itemOptions, indexSubmenu) => (
            <SubMenu
              key={`subitem-sidebar-${indexSubmenu}`}
              label={itemOptions.label}
              className={
                variant === "connexio"
                  ? "hover:text-connexio-primary-light hover:bg-white"
                  : "hover:text-klub-primary hover:bg-white"
              }
              icon={itemOptions.icon}
            >
              {itemOptions.subMenus?.length &&
                itemOptions.subMenus?.map((itemSubmenus, indexMenuitem) => (
                  <MenuItem
                    key={`menuitem-sidebar-${indexMenuitem}`}
                    className={
                      variant === "connexio"
                        ? "bg-connexio-primary-light text-white hover:bg-white hover:text-connexio-primary-light"
                        : "bg-klub-primary text-white hover:bg-white hover:text-klub-primary"
                    }
                    icon={itemSubmenus.icon}
                  >
                    {itemSubmenus.label}
                  </MenuItem>
                ))}
            </SubMenu>
          ))}
        </Menu>
      </SidebarLib>
    </ProSidebarProvider>
  );
};

export default Sidebar;
