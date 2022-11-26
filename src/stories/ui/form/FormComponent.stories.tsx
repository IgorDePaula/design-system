import React from 'react';
import {ComponentStory} from "@storybook/react";
import Form from "../../../components/form";
import people from "../../../mocks/select";
import {mailingLists} from "../../../mocks/radiobutton";
import {getMainFile} from "@storybook/addon-storyshots/dist/ts3.9/frameworks/configure";

export default {
    title: 'UI/Form/Form',
    component: Form,
    argTypes: {
        theme: {
            description: 'Light em fundo claro, Dark em fundo escuro',
            options: ['dark', 'light'],
            table: {
                type: {
                    dark: 'Dark',
                    light: 'Light'
                }
            },
            control: {type: 'radio'}
        }
    },
    parameters: {
        layout: 'centered',
        theme: {
            values: {
                dark: 'dark',
                light: 'light'
            }
        },
        docs: {
            description: {
                component: 'Componente de carregando para colocar em botoes de formularios',
            },
        },
    },
};

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const Default = Template.bind({});

Default.args = {
    onSubmit: (data: object) => {
        window.alert(JSON.stringify(data))
    },
    fields: [{
        name: 'label1',
        label: 'label 1',
        component: 'text-input',
        rules: [(value: any) => !!value || "Campo Obrigatorio"]
    }, {
        name: 'label2',
        label: 'label 2',
        component: 'switch',
        required: true
    }, {
        name: 'label3',
        label: 'label 3',
        component: 'select',
        options: people,
        required: true
    }, {
        name: 'label4',
        label: 'label 4',
        component: 'autocomplete',
        options: people,
        required: true
    },  {
        name: 'label5',
        label: 'label 5',
        component: 'radio',
        options: mailingLists,
        required: true
    }, {
        name: 'label6',
        label: 'label 6',
        component: 'radio',
        options: mailingLists,
        required: true,
        position:'vertical'
    }]
}


