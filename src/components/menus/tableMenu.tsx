import MenuOption from '../option'
import React from "react";
import {TrashIcon} from "@heroicons/react/24/outline";
import {PencilIcon} from "@heroicons/react/24/outline";

export default function TableMenu(id:number){
    const options = [
        {label:'Editar', icon:<PencilIcon className="mr-2 h-5 w-5 text-cyan-400"  />, handler:(e:React.HTMLAttributes<any>)=>{window.alert(`Registro ${e} Editado!`)}},
        {label:'Deletar', icon:<TrashIcon className="mr-2 h-5 w-5 text-cyan-400" />, handler:(e:React.HTMLAttributes<any>)=>{window.alert(`Registro ${e} Deletado!`)} },
    ]

    return <MenuOption options={options}>{id}</MenuOption>
}
