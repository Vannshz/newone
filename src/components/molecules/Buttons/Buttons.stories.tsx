import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Buttons";
import { ThemeProvider, createTheme, Typography } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Cera Pro",
          fontSize: "16px",
          fontWeight: "400px",
          textTransform: "none",
        },
      },
    },
  },
});

export default {
  title: "Molecules/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    onMouseEnter: { action: "Mouse Enter" },
    onMouseLeave: { action: "Mouse Leave" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => (
  <ThemeProvider theme={theme}>
    <Button {...args} />
  </ThemeProvider>
);


export const Connect = Template.bind({});

Connect.args = {
  children: (
      <Typography variant="body1" sx={{color: "#03314B"}}>Connect</Typography>
  ),
};

export const AddLibrary = Template.bind({});
AddLibrary.args = {
  children: (
      <Typography variant="body1" sx={{color: "#0365F2"}}>Add Library</Typography>
  ),
};