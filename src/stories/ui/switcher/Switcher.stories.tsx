import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Switcher from "@components/switcher";

export default {
    title: 'UI/Form/Switcher',
    component: Switcher,
    argTypes: {
        label: {
            description: 'Label do campo',
        },
        name: {
            description: 'Nome do campo'
        },
        disabled: {
            description: 'Informa campo desabilitado'
        }, getValue: {
            description: 'Funcao para capturar o valor setado no switcher'
        },
        selectedValue: {
            description: 'parametro para indicar o valor default do switcher'
        },
        required: {
            description: 'Boolean para indicar quando o campo é um recurso  obrigatório do formulário',
            defaultValue: false,
            options: [true, false],
            table: {
                type: [
                    true, false
                ]
            },
            control: {type: 'radio'}
        },
        isSubmiting: {
            description: 'Boolean para indicar quando o campo e o formulario foram submetidos, para validar e' +
                ' recuperar seu valor',
            defaultValue: false,
            options: [true, false],
            table: {
                type: [
                    true, false
                ]
            },
            control: {type: 'radio'}
        },
        getError: {
            description: 'Funcao para indicar se o campo tem erro de validacao ou nao'
        },
    },
    parameters: {

        layout: 'centered',
        label: {
            description: 'Label do campo',
        },
        name: {
            description: 'Nome do campo'
        },
        disabled: {
            description: 'Informa campo desabilitado'
        }, getValue: {
            description: 'Funcao para capturar o valor setado no switcher'
        },
        selectedValue: {
            description: 'parametro para indicar o valor default do switcher'
        },
        required: {
            description: 'Boolean para indicar quando o campo é um recurso  obrigatório do formulário',
            defaultValue: false,
            options: [true, false],
            table: {
                type: [
                    true, false
                ]
            },
            control: {type: 'radio'}
        },
        isSubmiting: {
            description: 'Boolean para indicar quando o campo e o formulario foram submetidos, para validar e' +
                ' recuperar seu valor',
            defaultValue: false,
            options: [true, false],
            table: {
                type: [
                    true, false
                ]
            },
            control: {type: 'radio'}
        },
        getError: {
            description: 'Funcao para indicar se o campo tem erro de validacao ou nao'
        },
        docs: {
            description: {
                component: 'Switcher é um componente boolean para formulários',
            },
        },
    },
} as ComponentMeta<typeof Switcher>;

const Template: ComponentStory<typeof Switcher> = (args) => <Switcher {...args} />;

export const Default = Template.bind({});

export const WithLabel = Template.bind({});

WithLabel.args = {
    label: 'Opção habilitada?'
}

export const WithStateTrue = Template.bind({});

WithStateTrue.args = {
    label: 'Opção habilitada?',
    state: true
}

export const WithStateFalse = Template.bind({});

WithStateFalse.args = {
    label: 'Opção habilitada?',
    state: false
}
export const WithError = Template.bind({});

WithError.args = {
    label: 'Opção habilitada?',
    state: false,
    required: true,
    isSubmiting: true
}


