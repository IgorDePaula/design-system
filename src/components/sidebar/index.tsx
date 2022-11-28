import React, { Fragment, ReactElement, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { BsArrowDownShort } from "react-icons/bs";

type OptionsProps = {
  id: number;
  label?: string;
  name?: string;
  path?: string;
  icon?: ReactElement;
  subMenus?: OptionsProps[];
};

type SidebarProps = {
  variant?: "klub" | "connexio";
  options?: OptionsProps[];
};

const Sidebar = ({ variant, options }: SidebarProps) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [openOptionsWhenMenuClosed, setOpenOptionsWhenMenuClosed] =
    useState<boolean>(false);
  const [expandOptions, setExpandOptions] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number>();
  const alignIcons = openMenu ? "justify-start" : "justify-center";

  const handleChangeMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
    setIsMobile((prevState) => !prevState);
  };

  const handleOpenOption = (item: OptionsProps) => () => {
    expandOptions && selectedItem === item.id
      ? setExpandOptions((prevState) => !prevState)
      : setExpandOptions(true);
    openOptionsWhenMenuClosed && selectedItem === item.id
      ? setOpenOptionsWhenMenuClosed((prevState) => !prevState)
      : setOpenOptionsWhenMenuClosed(true);
    setSelectedItem(item.id);
  };

  return (
    <>
      <div className="flex h-screen overflow-y-auto">
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileMenuOpen}
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
                    variant === "klub"
                      ? "relative flex w-full max-w-xs flex-1 flex-col bg-klub-primary focus:outline-none"
                      : "relative flex w-full max-w-xs flex-1 flex-col bg-connexio-primary-light focus:outline-none"
                  }
                >
                  <div className="self-end">
                    <button
                      type="button"
                      data-testid="close-mobile-menu"
                      className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none"
                      onClick={handleChangeMobileMenu}
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
                      variant === "klub"
                        ? "flex flex-col items-start space-y-3 w-full mx-auto mt-5 "
                        : "flex flex-col items-start space-y-3 w-full mx-auto mt-5 "
                    }
                  >
                    {options?.map((item) => (
                      <div
                        data-testid="item-option"
                        onClick={handleOpenOption(item)}
                        className={
                          variant === "connexio"
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
                                    expandOptions && selectedItem === item.id
                                      ? "mt-1 rotate-0 ease-in-out duration-200"
                                      : "mt-1 -rotate-90 ease-in-out duration-200"
                                  }
                                />
                              </div>
                              <div
                                className={
                                  openOptionsWhenMenuClosed &&
                                  openMenu === false &&
                                  selectedItem === item.id
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
                                          variant === "connexio"
                                            ? " ml-2 self-start w-full rounded-lg   p-4 cursor-pointer"
                                            : "ml-2 self-start w-full rounded-lg  p-4   cursor-pointer"
                                        }
                                      >
                                        <div className="flex gap-0.5">
                                          <a
                                            data-testid="anchor-submenu"
                                            href={itemSubmenus.path}
                                            target="blank"
                                            onClick={() =>
                                              setOpenOptionsWhenMenuClosed(
                                                false
                                              )
                                            }
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
                                  openMenu && isMobile === false
                                    ? "flex self-center"
                                    : "hidden"
                                }
                              >
                                <BsArrowDownShort
                                  fontSize={15}
                                  className={
                                    expandOptions && selectedItem === item.id
                                      ? "rotate-0 ease-in-out duration-200"
                                      : "-rotate-90 ease-in-out duration-200"
                                  }
                                />
                              </div>
                            </div>
                            <div
                              className={
                                openMenu &&
                                expandOptions &&
                                selectedItem === item.id
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
                                        variant === "connexio"
                                          ? "  hover:rounded p-2 cursor-pointer duration-700"
                                          : " hover:rounded p-2 cursor-pointer duration-700"
                                      }
                                    >
                                      <div className="flex gap-0.5">
                                        <a
                                          href={itemSubmenus.path}
                                          target="blank"
                                          onClick={() =>
                                            setExpandOptions(false)
                                          }
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

        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:flex-shrink-0">
          <div
            className={
              openMenu
                ? "flex w-[250px] flex-col ease-in-out duration-200"
                : "flex w-20 flex-col ease-in-out duration-200"
            }
          >
            <div
              className={
                variant === "connexio"
                  ? "flex min-h-0 flex-1 flex-col overflow-y-auto bg-connexio-primary-light text-white  "
                  : "flex min-h-0 flex-1 flex-col overflow-y-auto bg-klub-primary text-white  "
              }
            >
              <div className="flex-1">
                <div
                  className={
                    openMenu
                      ? "flex text-white items-center justify-end py-4"
                      : "flex text-white items-center justify-center py-4"
                  }
                  onClick={() => {
                    //setMobileMenuOpen(true);
                    setExpandOptions(false);
                    setOpenOptionsWhenMenuClosed(false);
                  }}
                >
                  {openMenu ? (
                    <MdClose
                      data-testid="clickCloseMenu"
                      fontSize="30"
                      className={
                        variant === "connexio"
                          ? "cursor-pointer mr-2 hover:bg-white hover:text-connexio-primary-light duration-700 rounded-md"
                          : "cursor-pointer mr-2 hover:bg-white hover:text-klub-primary duration-700 rounded-md"
                      }
                      onClick={() => setOpenMenu(false)}
                    />
                  ) : (
                    <>
                      <BiMenu
                        data-testid="clickOpenMenu"
                        fontSize="30"
                        className={
                          variant === "connexio"
                            ? "cursor-pointer mr-2 hover:bg-white hover:text-connexio-primary-light duration-700 rounded-md"
                            : "cursor-pointer mr-2 hover:bg-white hover:text-klub-primary duration-700 rounded-md"
                        }
                        onClick={() => setOpenMenu(true)}
                      />
                    </>
                  )}
                </div>
                <nav
                  aria-label="Sidebar"
                  className={
                    openMenu
                      ? "flex flex-col items-start"
                      : "flex flex-col items-center"
                  }
                >
                  {options?.map((item) => (
                    <div
                      data-testid="option-menu"
                      onClick={handleOpenOption(item)}
                      className={
                        variant === "connexio"
                          ? `flex ${alignIcons} items-center w-full p-4 text-white hover:bg-white hover:text-connexio-primary-light  duration-700 hover:cursor-pointer`
                          : `flex ${alignIcons} items-center w-full p-4 text-white hover:bg-white hover:text-klub-primary duration-700 hover:cursor-pointer`
                      }
                    >
                      <div className="flex">
                        {item.icon}
                        <div className="flex-col">
                          <div className="flex">
                            <span
                              className={openMenu ? "flex bold ml-4" : "hidden"}
                            >
                              {item.label}
                            </span>
                            <div
                              className={
                                openOptionsWhenMenuClosed &&
                                openMenu === false &&
                                selectedItem === item.id
                                  ? variant === "klub"
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
                                        variant === "connexio"
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
                                            setOpenOptionsWhenMenuClosed(false)
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
                                openMenu ? "flex self-center" : "hidden"
                              }
                            >
                              <BsArrowDownShort
                                fontSize={15}
                                className={
                                  expandOptions && selectedItem === item.id
                                    ? "rotate-0 ease-in-out duration-200"
                                    : "-rotate-90 ease-in-out duration-200"
                                }
                              />
                            </div>
                          </div>
                          <div
                            className={
                              openMenu &&
                              expandOptions &&
                              selectedItem === item.id
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
                                      variant === "connexio"
                                        ? "hover:bg-gray-100 rounded p-1  cursor-pointer hover:duration-700"
                                        : "hover:bg-gray-100 rounded p-1  cursor-pointer hover:duration-700"
                                    }
                                  >
                                    <div
                                      className={
                                        variant === "connexio"
                                          ? "flex gap-0.5 p-1"
                                          : "flex gap-0.5 p-1"
                                      }
                                    >
                                      <a
                                        data-testid="anchor-submenu"
                                        href={itemSubmenus.path}
                                        target="blank"
                                        onClick={() => setExpandOptions(false)}
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

        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          {/* Mobile top navigation */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between  py-2 px-4 sm:px-6 lg:px-8">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=white"
                  alt="Your Company"
                />
              </div>
              <div>
                <button
                  data-testid="open-mobile-menu"
                  type="button"
                  className={
                    variant === "klub"
                      ? "-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md  text-klub-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      : "-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md  text-connexio-primary-light  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  }
                  onClick={handleChangeMobileMenu}
                >
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
