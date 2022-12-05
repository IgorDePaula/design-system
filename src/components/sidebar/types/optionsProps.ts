import { ReactElement } from "react";

export type OptionsProps = {
  id: number;
  label?: string;
  name?: string;
  path?: string;
  icon?: ReactElement;
  subMenus?: OptionsProps[];
};
