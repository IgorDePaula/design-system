import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Button from "@components/button";
import {LockClosedIcon} from "@heroicons/react/20/solid";

export default {
    title: 'UI/Button',
    component: Button,
    argTypes: {
        icon: {
            description: 'Ícone do botão',
            type: 'string',
            control: {type: 'text'}
        },text: {
            description: 'Texto do botão',
            type: 'string',
            defaultValue: 'Acessar',
            control: {type: 'text'}
        },
        onclick: {
            description: 'Ação de click no botão',
            table:{
                category:'Events',
                subcategory: 'Button Events',
            }
        },
    },
    parameters: {


        docs: {
            description: {
                component: 'TextInput é um input para formulários',
            },
        },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
export const WithIconComponent = Template.bind({});

WithIconComponent.args = {
    icon: <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true"/>,
    text:'Acessar',
    onclick: ()=>window.alert('Clicked!')
}

Default.args = {
    text:'Acessar',
    onclick: ()=>window.alert('Clicked!')
}




