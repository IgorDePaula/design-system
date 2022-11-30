import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Sidebar from "@components/sidebar";
import { mockSidebar } from "@mocks/sidebar";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    options: {
      defaultValue: [...mockSidebar],
    },
    variant: {
      defaultValue: "klub",
      options: ["klub", "connexio"],
      control: { type: "radio" },
    },
    toggleSidebar: { action: "toggleSidebar called" },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);
export const Default = Template.bind({});
