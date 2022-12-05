import { OptionsProps } from "./optionsProps";

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
