import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Avatar from "../../../components/avatar";
export default {
    title: 'UI/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Avatar do usuário',
            },
        },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;
export const AvatarComponent = Template.bind({url:''});

