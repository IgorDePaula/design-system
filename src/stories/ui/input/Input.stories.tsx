import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Input from "@components/input";

export default {
    title: 'UI/Form/Input',
    component: Input,
    argTypes: {
        label: {
            description: 'Label do campo'
        },
        placeholder: {description: 'Placeholder do campo', defaultValue: ''},
        value: {
            description: 'Label do campo',
            defaultValue: ''
        },
        type: {
            description: 'Tipo do campo'
        },
        name: {
            description: 'Nome do campo'
        },
        getValue: {
            description: 'Funcao para capturar o valor setado no input'
        },
        getError: {
            description: 'Funcao para indicar se o campo tem erro de validacao ou nao'
        },
        isSubmiting: {
            description: 'Informa ao campo que o form foi submetido para validar a informacao contida no campo',
            defaultValue: false,
            options: [true, false],
            table: {
                type: [
                    true, false
                ]
            },
            control: {type: 'radio'}
        },
        disabled: {
            description: 'Informa campo desabilitado',
            defaultValue: false,
            options: [true, false],
            table: {
                type: [
                    true, false
                ]
            },
            control: {type: 'radio'}
        },
        rules: {
            description: 'Array de funcoes de validacao do campo',
            defaultValue: []
        },
    },
    parameters: {
        layout: 'centered',
        label: {
            description: 'Label do campo',
        },
        placeholder: {description: 'Placeholder do campo'},
        value: {
            description: 'Label do campo'
        },
        type: {
            description: 'Tipo do campo'
        },
        name: {
            description: 'Nome do campo'
        },
        disabled: {
            description: 'Informa campo desabilitado'
        },
        getValue: {
            description: 'Funcao para capturar o valor setado no input'
        },
        getError: {
            description: 'Funcao para indicar se o campo tem erro de validacao ou nao'
        },
        isSubmiting: {
            description: 'Informa ao campo que o form foi submetido para validar a informacao contida no campo',
            defaultValue: false,
            options: [true, false],
            table: {
                type: [
                    true, false
                ]
            },
            control: {type: 'radio'}
        },
        rules: {
            description: 'Array de funcoes de validacao do campo',
            defaultValue: []
        },
        docs: {
            description: {
                component: 'Componente input de formularios',
            },
        },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {name: 'Teste', label: 'Teste', type: 'text'}

export const NoLabel = Template.bind({});

NoLabel.args = {name: 'Teste'}

export const WithDefaultValue = Template.bind({});

WithDefaultValue.args = {name: 'Teste', value: '123'}

export const WithPlaceholder = Template.bind({});

WithPlaceholder.args = {name: 'Teste', placeholder: 'Digite the pin'}

export const Disabled = Template.bind({});

Disabled.args = {name: 'Teste', placeholder: 'Digite the pin', disabled: true}

export const TypePasword = Template.bind({});

TypePasword.args = {name: 'Teste', type: 'password', value: '123mudar'}

export const EmailPasword = Template.bind({});

EmailPasword.args = {
    name: 'Teste',
    type: 'email',
    value: '123mudar',
}
export const WithError = Template.bind({});

WithError.args = {
    name: 'Teste',
    type: 'email',
    value: '123mudar',
    rules: [value => !!value || "Campo obrigatorio"],
    isSubmiting: true
}
