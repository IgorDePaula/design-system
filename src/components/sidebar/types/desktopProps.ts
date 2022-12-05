import { OptionsProps } from "./optionsProps";

export type DesktopProps = {
  variant: string | undefined;
  options: OptionsProps[] | undefined;
  expandOptions: boolean;
  setExpandOptions: React.Dispatch<React.SetStateAction<boolean>>;
  selectedItem: number | undefined;
  openOptionsWhenMenuClosed: boolean;
  setOpenOptionsWhenMenuClosed: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  openMenu: boolean;
  handleOpenOption: (item: OptionsProps) => () => void;
};
