import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Select from "@components/select";
import people from "../../../mocks/select";

export default {
    title: 'UI/Form/Select',
    component: Select,
    argTypes: {
        label: {
            description: 'Label do campo'
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
        options:{
            description:'Array de opcoes do autocomplete, no par label:value'
        },
        getState:{
            description:'Funcao para capturar o valor setado no autocomplete'
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
        label: {
            description: 'Label do campo',
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
        getState:{
            description:'Funcao para capturar o valor setado no autocomplete'
        },
        docs: {
            description: {
                component: 'Componente autocomplete de formularios',
            },
        },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});

Default.args = {label: 'Teste', options: people}

export const NoLabel = Template.bind({});

NoLabel.args = {options: people}

export const WithDefaultValue = Template.bind({});

WithDefaultValue.args = {options: people, selectedValue: 'Benedict Kessler'}

export const WithError = Template.bind({});

WithError.args = {
    id: 'teste',
    name: 'Teste',
    type: 'text',
    rules: [(value: any) => !!value || 'Campo obrigatorio'],
    options: people
}

export const Disabled = Template.bind({});

Disabled.args = {id: 'teste', name: 'Teste', disabled: true, options: people}
