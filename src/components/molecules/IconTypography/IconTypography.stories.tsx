import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconTypography from "./IconTypography";
import { ReactComponent as User } from "../../../images/user.svg";
import { ReactComponent as Time } from "../../../images/time.svg";
import { ReactComponent as Entreprenuer } from "../../../images/entreprenuer.svg";

export default {
  title: "Molecules/IconWithTypograph",
  component: IconTypography,
} as ComponentMeta<typeof IconTypography>;

const Template: ComponentStory<typeof IconTypography> = args => (
  <IconTypography {...args} />
);

export const TimeIcon = Template.bind({});
TimeIcon.args = {
  iconSrc: <Time />,
  variant: "caption",
  title: "13-min read",
};

export const UserIcon = Template.bind({});
UserIcon.args = {
  iconSrc: <User />,
  variant: "caption",
  title: "1.9k reads",
};

export const EntrepreneurIcon = Template.bind({});
EntrepreneurIcon.args = {
  iconSrc: <Entreprenuer />,
  variant: "body1",
  title: "Entreprenuership",
};
