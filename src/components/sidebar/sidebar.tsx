import React, { useState } from "react";
import MobileSidebar from "./mobileSidebar";
import DesktopSidebar from "./desktopSidebar";
import MobileNavigation from "./mobileNavigation";
import { OptionsProps } from "./types/optionsProps";

export type SidebarProps = {
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
        {/* Mobile Sidebar */}
        <MobileSidebar
          variant={variant}
          setExpandOptions={setExpandOptions}
          expandOptions={expandOptions}
          options={options}
          openOptionsWhenMenuClosed={openOptionsWhenMenuClosed}
          setOpenOptionsWhenMenuClosed={setOpenOptionsWhenMenuClosed}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          openMenu={openMenu}
          isMobile={isMobile}
          handleOpenOption={handleOpenOption}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          handleChangeMobileMenu={handleChangeMobileMenu}
        />

        {/* Desktop Sidebar */}
        <DesktopSidebar
          variant={variant}
          setExpandOptions={setExpandOptions}
          expandOptions={expandOptions}
          options={options}
          openOptionsWhenMenuClosed={openOptionsWhenMenuClosed}
          setOpenOptionsWhenMenuClosed={setOpenOptionsWhenMenuClosed}
          selectedItem={selectedItem}
          setOpenMenu={setOpenMenu}
          openMenu={openMenu}
          handleOpenOption={handleOpenOption}
        />

        {/* Mobile top navigation */}
        <MobileNavigation
          handleChangeMobileMenu={handleChangeMobileMenu}
          variant={variant}
        />
      </div>
    </>
  );
};

export default Sidebar;
