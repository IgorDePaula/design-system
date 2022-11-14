import React from "react";
import UserMenu from "../user-menu";

export type HeaderProps = {
  variant: "klub" | "connexio";
};
const Header = ({ variant }: HeaderProps) => {
  return (
    <nav className="navbar navbar-expand-lg py-2 flex items-center justify-end">
      <div className="flex justify-end flex-wrap">
        <UserMenu variant={variant} />
      </div>
    </nav>
  );
};

export default Header;
