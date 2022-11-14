import React from "react";
import { BiUserVoice } from "react-icons/bi";
import { MdSpeed } from "react-icons/md";
 
export const mockSidebar = [
  {
    label: "Example MenuItem",
    icon: <BiUserVoice fontSize="25" />,
    subMenus: [
      {
        label: "Example SubItem",
        icon: <MdSpeed fontSize="25" />,
      },
    ],
  },
];
