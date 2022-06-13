import { ComponentMeta, ComponentStory } from "@storybook/react";
import Banner from "./Banner";


export default {
  title: "Organisms/Banner Card",
  component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = () => <Banner />;

export const CardBanner = Template.bind({});
CardBanner.args = {};
