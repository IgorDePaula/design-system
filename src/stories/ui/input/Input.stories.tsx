import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Input from "@components/input";

export default {
    title: 'UI/Form/Input',
    component: Input,
    argTypes: {
        id: {
            description: 'ID fo campo'
        },
        label: {
            description: 'Label do campo'
        },
        placeholder: {description: 'Placeholder do campo'},
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
        hasError: {
            description: 'Funcao para indicar se o campo tem erro de validacao ou nao'
        },
    },
    parameters: {
        layout: 'centered',
        id: {
            description: 'ID fo campo'
        },
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
        rules: {
            description: 'Array de funcoes de validacao do campo'
        },
        hasError: {
            description: 'Funcao para indicar se o campo tem erro de validacao ou nao'
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

Default.args = {id: 'teste', name: 'Teste', label: 'Teste', type: 'text'}

export const NoLabel = Template.bind({});

NoLabel.args = {id: 'teste', name: 'Teste'}

export const WithDefaultValue = Template.bind({});

WithDefaultValue.args = {id: 'teste', name: 'Teste', value: '123'}

export const WithError = Template.bind({});

WithError.args = {
    id: 'teste',
    name: 'Teste',
    type: 'text',
    rules: [(value: any) => !!value || 'Campo obrigatorio']
}

export const WithPlaceholder = Template.bind({});

WithPlaceholder.args = {id: 'teste', name: 'Teste', placeholder: 'Digite the pin'}

export const Disabled = Template.bind({});

Disabled.args = {id: 'teste', name: 'Teste', placeholder: 'Digite the pin', disabled: true}

export const TypePasword = Template.bind({});

TypePasword.args = {id: 'teste', name: 'Teste', type: 'password', value: '123mudar'}

export const EmailPasword = Template.bind({});

EmailPasword.args = {
    id: 'teste',
    name: 'Teste',
    type: 'email',
    value: '123mudar',
}
