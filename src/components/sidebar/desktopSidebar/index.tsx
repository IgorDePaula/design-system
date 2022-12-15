import React from "react";
import { BiMenu } from "react-icons/bi";
import { BsArrowDownShort } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { OptionsProps } from "../types/optionsProps";

export type DesktopProps = {
  variant: string | undefined;
  options: OptionsProps[] | undefined;
  expandOptions: boolean;
  setExpandOptions: React.Dispatch<React.SetStateAction<boolean>>;
  selectedItem: number | undefined;
  openOptionsWhenMenuClosed: boolean;
  setOpenOptionsWhenMenuClosed: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  openMenu: boolean;
  handleOpenOption: (item: OptionsProps) => () => void;
};

const DesktopSidebar = (props: DesktopProps) => {
  const alignIcons = props.openMenu ? "justify-start" : "justify-center";
  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div
        className={
          props.openMenu
            ? "flex w-[250px] flex-col ease-in-out duration-200"
            : "flex w-20 flex-col ease-in-out duration-200"
        }
      >
        <div
          className={
            props.variant === "connexio"
              ? "flex min-h-0 flex-1 flex-col overflow-y-auto bg-connexio-primary-light text-white  "
              : "flex min-h-0 flex-1 flex-col overflow-y-auto bg-klub-primary text-white  "
          }
        >
          <div className="flex-1">
            <div
              className={
                props.openMenu
                  ? "flex text-white items-center justify-end py-4"
                  : "flex text-white items-center justify-center py-4"
              }
              onClick={() => {
                props.setExpandOptions(false);
                props.setOpenOptionsWhenMenuClosed(false);
              }}
            >
              {props.openMenu ? (
                <MdClose
                  data-testid="clickCloseMenu"
                  fontSize="30"
                  className={
                    props.variant === "connexio"
                      ? "cursor-pointer mr-2 hover:bg-white hover:text-connexio-primary-light duration-700 rounded-md"
                      : "cursor-pointer mr-2 hover:bg-white hover:text-klub-primary duration-700 rounded-md"
                  }
                  onClick={() => props.setOpenMenu(false)}
                />
              ) : (
                <>
                  <BiMenu
                    data-testid="clickOpenMenu"
                    fontSize="30"
                    className={
                      props.variant === "connexio"
                        ? "cursor-pointer mr-2 hover:bg-white hover:text-connexio-primary-light duration-700 rounded-md"
                        : "cursor-pointer mr-2 hover:bg-white hover:text-klub-primary duration-700 rounded-md"
                    }
                    onClick={() => props.setOpenMenu(true)}
                  />
                </>
              )}
            </div>
            <nav
              aria-label="Sidebar"
              className={
                props.openMenu
                  ? "flex flex-col items-start"
                  : "flex flex-col items-center"
              }
            >
              {props.options?.map((item) => (
                <div
                  data-testid="option-menu"
                  onClick={props.handleOpenOption(item)}
                  className={
                    props.variant === "connexio"
                      ? `flex ${alignIcons} items-center w-full p-4 text-white hover:bg-white hover:text-connexio-primary-light  duration-700 hover:cursor-pointer`
                      : `flex ${alignIcons} items-center w-full p-4 text-white hover:bg-white hover:text-klub-primary duration-700 hover:cursor-pointer`
                  }
                >
                  <div className="flex">
                    {item.icon}
                    <div className="flex-col">
                      <div className="flex">
                        <span
                          className={
                            props.openMenu ? "flex bold ml-4" : "hidden"
                          }
                        >
                          {item.label}
                        </span>
                        <div
                          className={
                            props.openOptionsWhenMenuClosed &&
                            props.openMenu === false &&
                            props.selectedItem === item.id
                              ? props.variant === "klub"
                                ? "flex flex-col justify-center rounded-md text-white drop-shadow-2xl  bg-klub-primary min-w-min p-1 absolute left-[90px]"
                                : "flex flex-col justify-center rounded-md text-white drop-shadow-2xl bg-connexio-primary-light   min-w-min p-1 absolute left-[90px]"
                              : "hidden"
                          }
                        >
                          {item.subMenus?.length &&
                            item.subMenus?.map(
                              (
                                itemSubmenus: OptionsProps,
                                indexMenuitem: number
                              ) => (
                                <div
                                  key={`menuitem-sidebar-${indexMenuitem}`}
                                  className={
                                    props.variant === "connexio"
                                      ? "hover:bg-white hover:text-connexio-primary-light rounded-sm duration-700 p-2 cursor-pointer"
                                      : "hover:bg-white hover:text-klub-primary duration-700 rounded-sm p-2  cursor-pointer"
                                  }
                                >
                                  {/* closed menu */}
                                  <div className="flex gap-0.5">
                                    <a
                                      data-testid="anchor-submenu"
                                      href={itemSubmenus.path}
                                      target="blank"
                                      onClick={() =>
                                        props.setOpenOptionsWhenMenuClosed(
                                          false
                                        )
                                      }
                                    >
                                      {itemSubmenus.icon}
                                      <span className="text-sm m-2">
                                        {itemSubmenus.name}
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              )
                            )}
                        </div>

                        <div
                          className={
                            props.openMenu ? "flex self-center" : "hidden"
                          }
                        >
                          <BsArrowDownShort
                            fontSize={15}
                            className={
                              props.expandOptions &&
                              props.selectedItem === item.id
                                ? "rotate-0 ease-in-out duration-200"
                                : "-rotate-90 ease-in-out duration-200"
                            }
                          />
                        </div>
                      </div>
                      <div
                        className={
                          props.openMenu &&
                          props.expandOptions &&
                          props.selectedItem === item.id
                            ? "flex flex-col mt-3"
                            : "hidden"
                        }
                      >
                        {item.subMenus?.length &&
                          item.subMenus?.map(
                            (
                              itemSubmenus: OptionsProps,
                              indexMenuitem: number
                            ) => (
                              <div
                                key={`menuitem-sidebar-${indexMenuitem}`}
                                className={
                                  props.variant === "connexio"
                                    ? "hover:bg-gray-100 rounded p-1  cursor-pointer hover:duration-700"
                                    : "hover:bg-gray-100 rounded p-1  cursor-pointer hover:duration-700"
                                }
                              >
                                <div
                                  className={
                                    props.variant === "connexio"
                                      ? "flex gap-0.5 p-1"
                                      : "flex gap-0.5 p-1"
                                  }
                                >
                                  <a
                                    data-testid="anchor-submenu"
                                    href={itemSubmenus.path}
                                    target="blank"
                                  >
                                    {itemSubmenus.icon}
                                    <span className="text-sm m-2">
                                      {itemSubmenus.name}
                                    </span>
                                  </a>
                                </div>
                              </div>
                            )
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopSidebar;
