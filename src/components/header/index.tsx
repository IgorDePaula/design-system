import React, { useState } from "react";
import UserMenu from "../user-menu";

export type HeaderProps = {
  variant: "klub" | "connexio";
  showDropdown: boolean;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
};
const Header = ({ variant }: HeaderProps) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  return (
    <nav className="navbar navbar-expand-lg py-2 flex items-center justify-end">
      <div
        tabIndex={0}
        onBlur={() =>
          setTimeout(() => {
            setShowDropdown(false);
          }, 100)
        }
        className="flex justify-end flex-wrap"
      >
        <UserMenu
          variant={variant}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        />
      </div>
    </nav>
  );
};

export default Header;
