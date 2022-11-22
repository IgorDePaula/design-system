import React from "react";
import { BiUserVoice } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { MdSpeed } from "react-icons/md";
export const mockSidebar = [
    {
        id: 1,
        label: "Exemplo",
        icon: React.createElement(BiUserVoice, { fontSize: "25", color: "white" }),
        subMenus: [
            {
                name: "Example SubItem 2",
                path: "https://react-icons.github.io/react-icons/",
                icon: React.createElement(MdSpeed, { fontSize: "25" }),
            },
            {
                name: "Example SubItem 2",
                path: "https://tailwindcss.com/docs/installation/",
                icon: React.createElement(BiShoppingBag, { fontSize: "25" }),
            },
            {
                name: "Example SubItem 2",
                path: "https://open.spotify.com/",
                icon: React.createElement(MdSpeed, { fontSize: "25" }),
            },
        ],
    },
    {
        id: 4,
        label: "Exemplo",
        icon: React.createElement(CgClose, { fontSize: "25", color: "white" }),
        subMenus: [
            {
                name: "Example SubItem 4",
                path: "https://www.globo.com/",
                icon: React.createElement(MdSpeed, { fontSize: "25" }),
            },
            {
                name: "Example SubItem 4",
                path: "https://www.youtube.com/",
                icon: React.createElement(MdSpeed, { fontSize: "25" }),
            },
            {
                name: "Example SubItem 4",
                path: "https://www.alura.com/",
                icon: React.createElement(MdSpeed, { fontSize: "25" }),
            },
        ],
    },
];
//# sourceMappingURL=mock.js.map