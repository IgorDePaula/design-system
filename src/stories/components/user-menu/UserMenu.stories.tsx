import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import UserMenu from "@components/user-menu";

export default {
  title: "Components/UserMenu",
  component: UserMenu,
  parameters: {
    layout: "fullscreen",
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
    <nav className="navbar navbar-expand-lg py-2 flex items-center justify-center">
    <UserMenu{...args}/>
    </nav>
);
export const Default = Template.bind({});
