import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Radio from "@components/radiobutton";
import {mailingLists, plans} from "../../../mocks/radiobutton";

/**
 *  name: string
 *     disabled?: boolean
 *     hasError?: boolean
 *     label?: string
 *     checked?: string | number
 *     options: RadioButtonOptionType[]
 *     position: 'vertical' | 'horizontal',
 *     getChecked:(param:string|number)=>void
 */
export default {
    title: 'UI/Form/Radio',
    component: Radio,
    argTypes: {

        label: {
            description: 'Label do campo'
        },
        options: {
            description: 'Opcoes do campo'
        },
        getChecked: {
            description: 'Funcao para capturar o valor selecionado pelo usuario'
        },
        checked: {
            description: 'Label do campo',
            defaultValue: ''
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
        position: {
            description: 'Informa posicao do campo: horizontal ou vertical. Default  horizontal',
            defaultValue: 'horizontal',
            options: ['horizontal','vertical'],
            table: {
                type: [
                    'horizontal','vertical'
                ]
            },
            control: {type: 'radio'}
        },
        hasError: {
            description: 'Funcao para indicar se o campo tem erro de validacao ou nao'
        },
    },
    parameters: {
        layout: 'centered',
        label: {
            description: 'Label do campo'
        },
        options: {
            description: 'Opcoes do campo'
        },
        getChecked: {
            description: 'Funcao para capturar o valor selecionado pelo usuario'
        },
        checked: {
            description: 'Label do campo',
        },
        name: {
            description: 'Nome do campo'
        },
        disabled: {
            description: 'Informa campo desabilitado',

        },
        position: {
            description: 'Informa posicao do campo: horizontal ou vertical. Default  horizontal',

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
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});

Default.args = {name: 'Teste', label: 'Teste', options: mailingLists}

export const NoLabel = Template.bind({});

NoLabel.args = {name: 'Teste', options: mailingLists}


export const WithDefaultValue = Template.bind({});

WithDefaultValue.args = {name: 'Teste', options: mailingLists, checked: 2}

export const WithError = Template.bind({});

WithError.args = {
    name: 'Teste',
    options: mailingLists,
    hasError: true
}

export const Disabled = Template.bind({});

Disabled.args = {name: 'Teste', options: mailingLists, disabled: true}

export const Horizontal = Template.bind({});

Horizontal.args = {name: 'Teste', options: mailingLists, disabled: true, position:'horizontal'}

export const Vertical = Template.bind({});

Vertical.args = {name: 'Teste', options: plans, disabled: true, position: 'vertical'}
