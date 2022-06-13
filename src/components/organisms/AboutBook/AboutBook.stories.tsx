import { ComponentMeta, ComponentStory } from "@storybook/react";
import { createTheme, ThemeProvider } from "@mui/material";
import AboutBook from "./AboutBook";

const theme = createTheme({
    components: {
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: "none",
            placeItems: "flex-start",
          },
          textColorPrimary: {
            color: "#03314B",
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          body2: {
            fontFamily: "Cera Pro",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "20px",
            color: "#03314B",
          },
        },
      },
    },
  });

export default {
  title: "Organisms/Book Tab",
  component: AboutBook,
} as ComponentMeta<typeof AboutBook>;

const Template: ComponentStory<typeof AboutBook> = () => (
  <ThemeProvider theme={theme}>
    <AboutBook />
  </ThemeProvider>
);

export const AboutBookStory = Template.bind({});
AboutBookStory.args = {};
