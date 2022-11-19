import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Switcher from "@components/switcher";

export default {
    title: 'UI/Form/Switcher',
    component: Switcher,
    argTypes: {
        state: {
            description: 'Estado externo para determinar o do componente',
            type: 'boolean'
        },
        label: {
            description: 'Texto do componente',
            type: 'string',
            control: {type: 'text'}
        },
        getState: {
            description: 'Ação de mudança de estado do componente',
        },
    },
    parameters: {

layout:'centered',
        docs: {
            description: {
                component: 'Switcher é um componente boolean para formulários',
            },
        },
    },
} as ComponentMeta<typeof Switcher>;

const Template: ComponentStory<typeof Switcher> = (args) =>  <Switcher {...args} />;

export const Default = Template.bind({});

export const WithLabel = Template.bind({});

WithLabel.args = {
    label:'Opção habilitada?'
}

export const WithStateTrue = Template.bind({});

WithStateTrue.args = {
    label:'Opção habilitada?',
    state:true
}

export const WithStateFalse = Template.bind({});

WithStateFalse.args = {
    label:'Opção habilitada?',
    state:false
}

export const WithStateGetstateFunction = Template.bind({});

WithStateGetstateFunction.args = {
    label:'Opção habilitada?',
    state:false,
    getState: state => window.alert(state)
}




