import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import TextInput from "@components/textinput";

export default {
    title: 'UI/TextInput',
    component: TextInput,
    argTypes: {
        id: {
            description: 'ID do campo',
            type: 'string',
            control: {type: 'text'}
        },
        name: {
            description: 'Name do campo',
            type: 'string',
            control: {type: 'text'}
        },
        type: {
            description: 'Type do campo',
            type: 'string',
            control: {type: 'text'}
        },
        autoComplete: {
            description: 'AutoComplete do campo',
            type: 'string',
            control: {type: 'text'}
        },
        required: {
            description: 'ID do campo',
            type: 'string',
            control: {type: 'text'}
        },
        className: {
            description: 'ID do campo',
            type: 'string',
            control: {type: 'text'}
        },
        placeholder: {
            description: 'PlaceHolder do campo',
            type: 'string',
            control: {type: 'text'}
        },
        label: {
            description: 'Label do campo',
            type: 'string',
            control: {type: 'text'}
        },
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'TextInput é um input para formulários',
            },
        },
    },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const TextInputComponent = Template.bind({});

export const TextInputWithLAbelComponent = Template.bind({});

TextInputWithLAbelComponent.args = {
    label: 'Login'
}
