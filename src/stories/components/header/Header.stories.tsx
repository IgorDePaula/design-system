import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from "@components/header";

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    variant: {
      defaultValue: "klub",
      options: ["klub", "connexio",],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;
export const Default = Template.bind({});
