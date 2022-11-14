import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Loading from "@components/loading";
export default {
  title: 'UI/Loading',
  component: Loading,
  argTypes: {
    theme:{
      description:'Light em fundo claro, Dark em fundo escuro',
      options:['dark','light'],
      table:{
        type:{
          dark:'Dark',
          light:'Light'
        }
      },
      control:{type:'radio'}
    }
  },
  parameters: {
    layout: 'fullscreen',
    theme:{
      values:{
        dark:'dark',
        light:'light'
      }
    },
    docs: {
      description: {
        component: 'Componente de carregando para colocar em botoes de formularios',
      },
    },
  },
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => <Loading {...args} />;

export const Default = Template.bind({});

Default.args = {
  theme: 'light'
}
