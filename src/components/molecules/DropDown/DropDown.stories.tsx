import { ComponentMeta, ComponentStory } from "@storybook/react";
import DropDown from "./DropDown";

export default {
  title: "Molecules/Drop down",
  component: DropDown,
  argTypes: { 
      onClick: { action: 'clicked' } 
    },
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = args => (
  <DropDown {...args} />
);

export const ExploreDropdown = Template.bind({});
ExploreDropdown.args = {
  title: "Explore",
};

export const AccountDropdown = Template.bind({});
AccountDropdown.args = {
  title: "Account",
};