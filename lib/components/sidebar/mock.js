import React from "react";
import { BiUserVoice } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { MdSpeed, MdOutlineAutoAwesomeMotion } from "react-icons/md";
export const mockSidebar = [
    {
        id: 1,
        label: "CONEXÃO CLIENTE",
        icon: React.createElement(BiUserVoice, { fontSize: "25" }),
        subMenus: [
            {
                id: 2,
                name: "Example SubItem 2",
                path: "https://react-icons.github.io/react-icons/",
                icon: React.createElement(MdSpeed, { fontSize: "25" }),
            },
            {
                id: 3,
                name: "Example SubItem 2",
                path: "https://tailwindcss.com/docs/installation/",
                icon: React.createElement(BiShoppingBag, { fontSize: "25" }),
            },
            {
                id: 4,
                name: "Example SubItem 2",
                path: "https://open.spotify.com/",
                icon: React.createElement(MdSpeed, { fontSize: "25" }),
            },
        ],
    },
    {
        id: 5,
        label: "EXEMPLO",
        icon: React.createElement(MdOutlineAutoAwesomeMotion, { fontSize: "25" }),
        subMenus: [
            {
                id: 6,
                name: "Example SubItem 4",
                path: "https://www.globo.com/",
                icon: React.createElement(MdSpeed, { fontSize: "25" }),
            },
            {
                id: 7,
                name: "Example SubItem 4",
                path: "https://www.youtube.com/",
                icon: React.createElement(MdSpeed, { fontSize: "25" }),
            },
            {
                id: 8,
                name: "Example SubItem 4",
                path: "https://www.alura.com/",
                icon: React.createElement(MdSpeed, { fontSize: "25" }),
            },
        ],
    },
];
//# sourceMappingURL=mock.js.map