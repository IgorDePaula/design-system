import React, { Fragment, ReactElement, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AiFillPlusCircle } from "react-icons/ai";
import { BiShoppingBag, BiMenu } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
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

const user = {
  name: "Emily Selman",
  email: "emily.selman@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "1", icon: <CgClose color="white" fontSize={25} /> },
  { name: "2", icon: <AiFillPlusCircle color="white" fontSize={25} /> },
  { name: "3", icon: <BiShoppingBag color="white" fontSize={25} /> },
  { name: "4", icon: <BsCart4 color="white" fontSize={25} /> },
];

const Sidebar = ({ variant, options }: SidebarProps) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openOptionsWhenMenuClosed, setOpenOptionsWhenMenuClosed] =
    useState<boolean>(false);
  const [expandOptions, setExpandOptions] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number>();
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
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-4">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="pt-5 pb-4">
                    <div className="flex flex-shrink-0 items-center px-4">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                      />
                    </div>
                    <nav aria-label="Sidebar" className="mt-5">
                      <div className="space-y-1 px-2">
                        {navigation.map((item) => (
                          <>{item.icon}</>
                        ))}
                      </div>
                    </nav>
                  </div>
                  <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                    <a href="#" className="group block flex-shrink-0">
                      <div className="flex items-center">
                        <div>
                          <img
                            className="inline-block h-10 w-10 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                            {user.name}
                          </p>
                          <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                            Account Settings
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}

        <div className="hidden lg:flex lg:flex-shrink-0">
          <div
            className={
              openMenu
                ? "flex w-[250px] flex-col ease-in-out duration-300"
                : "flex w-20 flex-col ease-in-out duration-300"
            }
          >
            <div
              className={
                variant === "connexio"
                  ? "flex min-h-0 flex-1 flex-col overflow-y-auto bg-connexio-primary-light"
                  : "flex min-h-0 flex-1 flex-col overflow-y-auto bg-klub-primary"
              }
            >
              <div className="flex-1">
                <div
                  className={
                    openMenu
                      ? "flex items-center justify-end py-4"
                      : "flex items-center justify-center py-4"
                  }
                  onClick={() => {
                    setMobileMenuOpen(true);
                    setExpandOptions(false);
                    setOpenOptionsWhenMenuClosed(false);
                  }}
                >
                  {openMenu ? (
                    <MdClose
                      fontSize="30"
                      color="white"
                      className="cursor-pointer mr-2"
                      onClick={() => setOpenMenu(false)}
                    />
                  ) : (
                    <>
                      <BiMenu
                        fontSize="30"
                        color="white"
                        className="cursor-pointer"
                        onClick={() => setOpenMenu(true)}
                      />
                    </>
                  )}
                </div>
                <nav
                  aria-label="Sidebar"
                  className={
                    openMenu
                      ? "flex flex-col items-start space-y-3 ml-3"
                      : "flex flex-col items-center space-y-3"
                  }
                >
                  {options?.map((item) => (
                    <div
                      onClick={() => {
                        expandOptions && selectedItem === item.id ? (
                          setExpandOptions(prevState => !prevState)
                        ) : (
                          setExpandOptions(true)
                        )
                        openOptionsWhenMenuClosed && selectedItem === item.id ? (
                          setOpenOptionsWhenMenuClosed(prevState => !prevState)
                        ) : (
                          setOpenOptionsWhenMenuClosed(true)
                        )
                        setSelectedItem(item.id);
                      }}
                      className={
                        variant === "connexio"
                          ? "flex items-center rounded-lg p-4 hover:bg-connexio-hover cursor-pointer"
                          : "flex items-center rounded-lg p-4 hover:bg-klub-hover cursor-pointer"
                      }
                    >
                      <div className="flex">
                        {item.icon}
                        <div className="flex-col">
                          <div className="flex">
                            <span
                              className={
                                openMenu
                                  ? "flex text-white bold ml-4"
                                  : "hidden"
                              }
                            >
                              {item.label}
                            </span>
                            <div
                              className={
                                openOptionsWhenMenuClosed &&
                                openMenu === false &&
                                selectedItem === item.id
                                  ? variant === "klub"
                                    ? "flex flex-col justify-center rounded-lg drop-shadow-2xl bg-klub-primary min-w-min p-2 absolute left-[90px]"
                                    : "flex flex-col justify-center rounded-lg drop-shadow-2xl bg-connexio-primary-light min-w-min p-2 absolute left-[90px]"
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
                                          ? "hover:bg-connexio-hover hover:rounded p-3 text-white cursor-pointer"
                                          : "hover:bg-klub-hover hover:rounded p-3 text-white cursor-pointer"
                                      }
                                    >
                                      {/* closed menu */}
                                      <div className="flex gap-0.5">
                                        <a
                                          href={itemSubmenus.path}
                                          target="blank"
                                          onClick={() =>
                                            setOpenOptionsWhenMenuClosed(false)
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
                                openMenu ? "flex self-center mt-2" : "hidden"
                              }
                            >
                              <BsArrowDownShort
                                fontSize={15}
                                color="white"
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
                                ? "flex flex-col mt-2"
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
                                        ? "hover:bg-connexio-primary-light hover:rounded p-2 text-white cursor-pointer"
                                        : "hover:bg-klub-primary hover:rounded p-2 text-white cursor-pointer"
                                    }
                                  >
                                    <div className="flex gap-0.5">
                                      <a
                                        href={itemSubmenus.path}
                                        target="blank"
                                        onClick={() => setExpandOptions(false)}
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
              </div>
            </div>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          {/* Mobile top navigation */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between bg-indigo-600 py-2 px-4 sm:px-6 lg:px-8">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=white"
                  alt="Your Company"
                />
              </div>
              <div>
                <button
                  type="button"
                  className="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
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
