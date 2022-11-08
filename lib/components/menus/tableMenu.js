"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const option_1 = __importDefault(require("../option"));
const outline_1 = require("@heroicons/react/24/outline");
const outline_2 = require("@heroicons/react/24/outline");
function TableMenu(id) {
    const options = [
        { label: 'Editar', icon: (0, jsx_runtime_1.jsx)(outline_2.PencilIcon, { className: "mr-2 h-5 w-5 text-cyan-400" }), handler: (e) => { window.alert(`Registro ${e} Editado!`); } },
        { label: 'Deletar', icon: (0, jsx_runtime_1.jsx)(outline_1.TrashIcon, { className: "mr-2 h-5 w-5 text-cyan-400" }), handler: (e) => { window.alert(`Registro ${e} Deletado!`); } },
    ];
    return (0, jsx_runtime_1.jsx)(option_1.default, Object.assign({ options: options }, { children: id }));
}
exports.default = TableMenu;
//# sourceMappingURL=tableMenu.js.map