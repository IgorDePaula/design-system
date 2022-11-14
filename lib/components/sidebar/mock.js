import React from "react";
import { BiUserVoice } from "react-icons/bi";
import { MdSpeed } from "react-icons/md";
export const mockSidebar = [
    {
        label: "Example MenuItem",
        icon: React.createElement(BiUserVoice, { fontSize: "25" }),
        subMenus: [
            {
                label: "Example SubItem",
                icon: React.createElement(MdSpeed, { fontSize: "25" }),
            },
        ],
    },
];
//# sourceMappingURL=mock.js.map