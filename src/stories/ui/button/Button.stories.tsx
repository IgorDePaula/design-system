import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Button from "@components/button";
import {LockClosedIcon} from "@heroicons/react/20/solid";

export default {
    title: 'UI/Button',
    component: Button,
    argTypes: {
        variant: {
            defaultValue: "klub",
            options: ["klub", "connexio"],
            control: { type: "radio" },
          },
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

const Template: ComponentStory<typeof Button> = (args) => 
<div className='w-32  m-auto'>
<Button className="" {...args} />

</div>

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

export const WithLoading= Template.bind({});

WithLoading.args = {
    icon: <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true"/>,
    isLoading: true,
    text:'Acessar',
    onclick: ()=>window.alert('Clicked!')
}
