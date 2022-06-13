import { ComponentMeta, ComponentStory } from "@storybook/react";
import SelectedTabs from "./SelectedTabs";
 
export default {
  title: "Molecules/Selected Tabs",
  component: SelectedTabs,
} as ComponentMeta<typeof SelectedTabs>;

const Template: ComponentStory<typeof SelectedTabs> = () => <SelectedTabs />;

export const Selected = Template.bind({});
