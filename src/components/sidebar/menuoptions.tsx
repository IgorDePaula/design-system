import React from "react";
import { OptionsProps } from "./index";
import { BsArrowDownShort } from "react-icons/bs";
type MenuOptionsProps = {
  variant: string | undefined;
  options: OptionsProps[] | undefined;
  expandOptions: boolean;
  setExpandOptions: React.Dispatch<React.SetStateAction<boolean>>;
  selectedItem: number | undefined;
  setSelectedItem: React.Dispatch<React.SetStateAction<number | undefined>>;
  openOptionsWhenMenuClosed: boolean;
  setOpenOptionsWhenMenuClosed: React.Dispatch<React.SetStateAction<boolean>>;
  openMenu: boolean;
  isMobile: boolean;
};

const MenuOptions = (props: MenuOptionsProps) => {
  const handleOpenOption = (item: OptionsProps) => () => {
    props.expandOptions && props.selectedItem === item.id
      ? props.setExpandOptions((prevState) => !prevState)
      : props.setExpandOptions(true);
    props.openOptionsWhenMenuClosed && props.selectedItem === item.id
      ? props.setOpenOptionsWhenMenuClosed((prevState) => !prevState)
      : props.setOpenOptionsWhenMenuClosed(true);
    props.setSelectedItem(item.id);
  };
  return (
    <nav
      aria-label="Sidebar"
      className={
        props.variant === "klub"
          ? "flex flex-col items-start space-y-3 w-full mx-auto mt-5 "
          : "flex flex-col items-start space-y-3 w-full mx-auto mt-5 "
      }
    >
      {props.options?.map((item) => (
        <div
          data-testid="item-option"
          onClick={handleOpenOption(item)}
          className={
            props.variant === "connexio"
              ? "flex items-center p-4 w-full text-white cursor-pointer "
              : "flex items-center p-4 w-full text-white cursor-pointer "
          }
        >
          <div className="flex">
            {item.icon}
            <div className="flex-col">
              <div className="flex-col">
                <div className="flex">
                  <span className={"flex  bold ml-4 text-xl"}>
                    {item.label}
                  </span>
                  <BsArrowDownShort
                    fontSize={20}
                    className={
                      props.expandOptions && props.selectedItem === item.id
                        ? "mt-1 rotate-0 ease-in-out duration-200"
                        : "mt-1 -rotate-90 ease-in-out duration-200"
                    }
                  />
                </div>
                <div
                  className={
                    props.openOptionsWhenMenuClosed &&
                    props.openMenu === false &&
                    props.selectedItem === item.id
                      ? "flex flex-col"
                      : "hidden"
                  }
                >
                  {item.subMenus?.length &&
                    item.subMenus?.map(
                      (itemSubmenus: OptionsProps, indexMenuitem: number) => (
                        <div
                          key={`menuitem-sidebar-${indexMenuitem}`}
                          className={
                            props.variant === "connexio"
                              ? " ml-2 self-start w-full rounded-lg   p-4 cursor-pointer"
                              : "ml-2 self-start w-full rounded-lg  p-4   cursor-pointer"
                          }
                        >
                          <div className="flex gap-0.5">
                            <a
                              data-testid="anchor-submenu"
                              href={itemSubmenus.path}
                              target="blank"
                            >
                              {itemSubmenus.icon}
                              <span className="text-sm">
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
                    props.openMenu && props.isMobile === false
                      ? "flex self-center"
                      : "hidden"
                  }
                >
                  <BsArrowDownShort
                    fontSize={15}
                    className={
                      props.expandOptions && props.selectedItem === item.id
                        ? "rotate-0 ease-in-out duration-200"
                        : "-rotate-90 ease-in-out duration-200"
                    }
                  />
                </div>
              </div>
              <div
                className={
                  props.openMenu && props.expandOptions && props.selectedItem === item.id
                    ? "flex flex-col"
                    : "hidden"
                }
              >
                {item.subMenus?.length &&
                  item.subMenus?.map(
                    (itemSubmenus: OptionsProps, indexMenuitem: number) => (
                      <div
                        key={`menuitem-sidebar-${indexMenuitem}`}
                        className={
                          props.variant === "connexio"
                            ? "  hover:rounded p-2 cursor-pointer duration-700"
                            : " hover:rounded p-2 cursor-pointer duration-700"
                        }
                      >
                        <div className="flex gap-0.5">
                          <a
                            data-testid="anchor-submenu"
                            href={itemSubmenus.path}
                            target="blank"
                          >
                            {itemSubmenus.icon}
                            <span className="text-sm">{itemSubmenus.name}</span>
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
  );
};

export default MenuOptions;
