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
            description:'Array de opcoes do select, no par label:value'
        },
        name: {
            description: 'Nome do campo'
        },getValue: {
            description: 'Funcao para capturar o valor setado no select'
        },
        selectedValue: {
            description: 'parametro para indicar o valor default do select'
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
        },getValue: {
            description: 'Funcao para capturar o valor setado no select'
        },
        selectedValue: {
            description: 'parametro para indicar o valor default do select'
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
                component: 'Componente select de formularios',
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

export const Disabled = Template.bind({});

Disabled.args = {name: 'Teste', disabled: true, options: people}

export const WithError = Template.bind({});

WithError.args = {name: 'Teste',  options: people, required:true, isSubmiting:true}
