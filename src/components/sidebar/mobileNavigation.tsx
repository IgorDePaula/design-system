import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { MobileNavigationProps } from "./types/mobileNavigationProps";

const MobileNavigation = ({
  variant,
  handleChangeMobileMenu,
}: MobileNavigationProps) => {
  return (
    <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
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
  );
};

export default MobileNavigation;
