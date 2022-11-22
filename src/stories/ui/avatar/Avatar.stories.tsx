import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Avatar from "../../../components/avatar";
export default {
  title: "UI/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Avatar do usuário",
      },
    },
  },
  argTypes: {
    variant: {
      defaultValue: "connexio",
      options: ["connexio", "klub"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;
export const Default = Template.bind({ url: "" });

export const WithImage = Template.bind({});

WithImage.args = {
  url: "https://randomuser.me/api/portraits/women/34.jpg",
};
