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
        name: {
            description: 'Nome do campo'
        },
        label: {
            description: 'Label do campo'
        },
        variant: {
            defaultValue: "connexio",
            options: ["connexio", "klub"],
            control: { type: "radio" },
          },
        options: {
            description: 'Opcoes do campo'
        },
        getValue: {
            description: 'Funcao para capturar o valor selecionado pelo usuario'
        },
        getError: {
            description: 'Funcao para indicar se o campo tem erro de validacao ou nao'
        },
        checked: {
            description: 'Label do campo',
            defaultValue: ''
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
            options: ['horizontal', 'vertical'],
            table: {
                type: [
                    'horizontal', 'vertical'
                ]
            },
            control: {type: 'radio'}
        },
    },
    parameters: {
        layout: 'centered',
        label: {
            description: 'Label do campo'
        },
        getError: {
            description: 'Funcao para indicar se o campo tem erro de validacao ou nao'
        },
        options: {
            description: 'Opcoes do campo'
        },
        getValue: {
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
    label: 'Teste',
    required: true,
    isSubmiting: true
}

export const Disabled = Template.bind({});

Disabled.args = {name: 'Teste', options: mailingLists, disabled: true}

export const Horizontal = Template.bind({});

Horizontal.args = {name: 'Teste', options: mailingLists, disabled: true, position: 'horizontal'}

export const Vertical = Template.bind({});

Vertical.args = {name: 'Teste', options: plans, disabled: true, position: 'vertical'}
