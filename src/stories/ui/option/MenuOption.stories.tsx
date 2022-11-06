import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {PencilIcon, TrashIcon} from "@heroicons/react/24/outline";
import MenuOption from "@components/option";

const options = [
    {label:'Editar', icon:<PencilIcon className="mr-2 h-5 w-5 text-cyan-400"  />, handler:(e:React.HTMLAttributes<any>)=>{window.alert(`Registro ${e} Editado!`)}},
    {label:'Deletar', icon:<TrashIcon className="mr-2 h-5 w-5 text-cyan-400" />, handler:(e:React.HTMLAttributes<any>)=>{window.alert(`Registro ${e} Deletado!`)} },
]
export default {
    title: 'UI/Option',
    component: MenuOption,
    argTypes: {
        options: {
            description: 'Lista de ações para o menu. Deve ter um label e um handler (função). O icon é opcional',
        },
        children: {
            description: 'ID do registro inserido via função factory (factory method pattern)',
            defaultValue: 1
        },
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Componente opções para registro de tabelas',
            },
        },
    },
} as ComponentMeta<typeof MenuOption>;

const Template: ComponentStory<typeof MenuOption> = ({options,children}) =>  <MenuOption options={options}>{children}</MenuOption>

export const OptionComponent = Template.bind({});

OptionComponent.args = {
    options: options,
}

