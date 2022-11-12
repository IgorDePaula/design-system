import MenuOption from '../option';
import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/outline";
export default function TableMenu(id) {
    const options = [
        { label: 'Editar', icon: React.createElement(PencilIcon, { className: "mr-2 h-5 w-5 text-cyan-400" }), handler: (e) => { window.alert(`Registro ${e} Editado!`); } },
        { label: 'Deletar', icon: React.createElement(TrashIcon, { className: "mr-2 h-5 w-5 text-cyan-400" }), handler: (e) => { window.alert(`Registro ${e} Deletado!`); } },
    ];
    return React.createElement(MenuOption, { options: options }, id);
}
//# sourceMappingURL=tableMenu.js.map