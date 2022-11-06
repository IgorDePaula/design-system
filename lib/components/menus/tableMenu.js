var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import MenuOption from '../option';
import { TrashIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/outline";
export default function TableMenu(id) {
    var options = [
        { label: 'Editar', icon: _jsx(PencilIcon, { className: "mr-2 h-5 w-5 text-cyan-400" }), handler: function (e) { window.alert("Registro ".concat(e, " Editado!")); } },
        { label: 'Deletar', icon: _jsx(TrashIcon, { className: "mr-2 h-5 w-5 text-cyan-400" }), handler: function (e) { window.alert("Registro ".concat(e, " Deletado!")); } },
    ];
    return _jsx(MenuOption, __assign({ options: options }, { children: id }));
}
//# sourceMappingURL=tableMenu.js.map