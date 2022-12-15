import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { OptionsProps } from "../types/optionsProps";
import { BsArrowDownShort } from "react-icons/bs";
import { MdClose } from "react-icons/md";

export type MobileProps = {
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
  handleOpenOption: (item: OptionsProps) => () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleChangeMobileMenu: () => void;
};


const MobileSidebar = (props: MobileProps) => {
  return (
    <Transition.Root show={props.mobileMenuOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-40 lg:hidden"
        onClose={props.setMobileMenuOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel
              className={
                props.variant === "klub"
                  ? "relative flex w-full max-w-xs flex-1 flex-col bg-klub-primary focus:outline-none"
                  : "relative flex w-full max-w-xs flex-1 flex-col bg-connexio-primary-light focus:outline-none"
              }
            >
              <div className="self-end">
                <button
                  type="button"
                  data-testid="close-mobile-menu"
                  className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none"
                  onClick={props.handleChangeMobileMenu}
                >
                  <MdClose
                    fontSize="30"
                    color="white"
                    className="cursor-pointer mr-2 mt-2"
                  />
                </button>
              </div>
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
                    onClick={props.handleOpenOption(item)}
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
                                props.expandOptions &&
                                props.selectedItem === item.id
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
                                (
                                  itemSubmenus: OptionsProps,
                                  indexMenuitem: number
                                ) => (
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
                              ? "flex flex-col"
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
                                      <span className="text-sm">
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
            </Dialog.Panel>
          </Transition.Child>
          <div className="w-14 flex-shrink-0" aria-hidden="true" />
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileSidebar;
