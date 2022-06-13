import { ComponentMeta, ComponentStory } from "@storybook/react";
import Icon from "./Icons";

export default {
  title: "Atoms/Logo",
  component: Icon,
} as ComponentMeta<typeof Icon>;


const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />;

export const BlinkistLogo = Template.bind({
});
