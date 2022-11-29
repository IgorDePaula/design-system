import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Autocomplete from "@components/autocomplete";
import people from "../../../mocks/autocomplete";

export default {
    title: 'UI/Form/Autocomplete',
    component: Autocomplete,
    argTypes: {
        label: {
            description: 'Label do campo'
        },
        name: {
            description: 'Nome do campo'
        },
        disabled: {
            description: 'Informa se o campo foi desabilitado',
            defaultValue: false,
            options: [true, false],
            table: {
                type: [
                    true, false
                ]
            },
            control: {type: 'radio'}
        },
        options: {
            description: 'Array de opcoes do autocomplete, no par label:value'
        },
        getValue: {
            description: 'Funcao para capturar o valor setado no autocomplete'
        },
        selectedValue: {
            description: 'parametro para indicar o valor default do autocomplete'
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
            description: 'Label do campo'
        },
        name: {
            description: 'Nome do campo'
        },
        disabled: {
            description: 'Informa se o campo foi desabilitado',
            defaultValue: false,
            options: [true, false],
            table: {
                type: [
                    true, false
                ]
            },
            control: {type: 'radio'}
        },
        options: {
            description: 'Array de opcoes do autocomplete, no par label:value'
        },
        getValue: {
            description: 'Funcao para capturar o valor setado no autocomplete'
        },
        selectedValue: {
            description: 'parametro para indicar o valor default do autocomplete'
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
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = (args) => <Autocomplete {...args} />;

export const Default = Template.bind({});

Default.args = {label: 'Teste', options: people}

export const NoLabel = Template.bind({});

NoLabel.args = {options: people}

export const WithDefaultValue = Template.bind({});

WithDefaultValue.args = {options: people, selectedValue: 'Benedict Kessler'}


export const Disabled = Template.bind({});

Disabled.args = {name: 'Teste', disabled: true, options: people}

export const WithError = Template.bind({});

WithError.args = {name: 'Teste', options: people, required: true, isSubmiting: true}
