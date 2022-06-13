import { ComponentMeta, ComponentStory } from "@storybook/react";
import Typography from "./Typography";

export default {
  title: "Atoms/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const template = Template.bind({});
template.args = {
  children: "This is heading 1",
  variant: 'h1',
  align: 'left',
};