import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Badget from "@components/badget";

export default {
    title: 'UI/Badget',
    component: Badget,
    argTypes: {
        text: {
            description: 'Text do campo',
            type: 'string',
            defaultValue: 'Ativo'
        },
        variant:{
            description: 'Variação de tipo do campo',
            options: ['info', 'success', 'warning','error'],
            defaultValue: 'success',
            control: { type: 'select' }
        }
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Badget é um componente pra criação de status',
            },
        },
    },
} as ComponentMeta<typeof Badget>;

const Template: ComponentStory<typeof Badget> = (args) => <Badget {...args} />;

export const BadgetComponent = Template.bind({});


