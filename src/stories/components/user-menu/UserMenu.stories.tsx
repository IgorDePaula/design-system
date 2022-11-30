import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import UserMenu from "@components/user-menu";

export default {
  title: "Components/UserMenu",
  component: UserMenu,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      defaultValue: "klub",
      options: ["klub", "connexio"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof UserMenu>;

const Template: ComponentStory<typeof UserMenu> = (args) => (
  <UserMenu {...args} />
);
export const Default = Template.bind({});
