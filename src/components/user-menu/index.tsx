import React, { useState } from "react";
import { AvatarIcon } from "../icons/avatar";
import { HeaderProps } from "../header";

const UserMenu = ({ variant }: HeaderProps) => {
  const [displayDropdown, setDisplayDropdown] = useState<string>("hidden");
  const onChangeVisibleDropdown = () => {
    if (displayDropdown === "hidden") {
      setDisplayDropdown("block");
      return;
    }

    setDisplayDropdown("hidden");
  };

  return (
    <div className="contents">
      <div
        data-testid="user-menu-wrapper-icon"
        className="flex items-center place-content-center mr-4 w-10 h-10 rounded-full cursor-pointer"
        onClick={onChangeVisibleDropdown}
      >
        <AvatarIcon width="30" height="30" variant={variant} />
      </div>

      <div
        className={`${displayDropdown} absolute mt-10 z-10 w-44 bg-white-bg rounded-l-lg divide-y divide-gray-400 shadow`}
      >
        <ul className="text-gray-600 dark:text-primary-color font-bold">
          <li className="cursor-pointer">
            <span
              className={
                variant === "connexio"
                  ? `text-connexio-primary-light block py-2 px-4 hover:bg-connexio-primary-light hover:text-white rounded-tl-lg`
                  : `text-klub-primary block py-2 px-4 hover:bg-klub-primary hover:text-white rounded-tl-lg`
              }
            >
              Perfil
            </span>
          </li>
          <li className="cursor-pointer">
            <span
              className={
                variant === "connexio"
                  ? `text-connexio-primary-light block py-2 px-4 hover:bg-connexio-primary-light hover:text-white rounded-bl-lg`
                  : `text-klub-primary block py-2 px-4 hover:bg-klub-primary hover:text-white rounded-bl-lg`
              }
            >
              Sair
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
