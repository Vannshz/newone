import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { styled, makeStyles } from "@mui/styles";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Typography from "../../atoms/typography/Typography";
import Constants from "../../../data/Constants";

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
  palette: {
    primary: {
      main: "#22C870",
    },
  },
});

const useStyles = makeStyles({
  root: {
    width: "200px",
    height: "36px",
    textTransform: "none",
  },
});

const TextStyled = styled("div")({
  position: "relative",
  left: "-20px",
});

type Props = {};

const AboutBook = (props: Props) => {
    const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const style = useStyles();
  return (
      <>
      <ThemeProvider theme={theme}>
      <Box
          sx={{
            typography: "body1",
          }}
        >
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "#E1ECFC",
                textTransform: "lowercase",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Synopsis" value="1" className={style.root} />
                <Tab label="Who is it for?" value="2" className={style.root} />
                <Tab
                  label="About the author"
                  value="3"
                  className={style.root}
                />
              </TabList>
            </Box>
            <TabPanel value="1">
              <TextStyled>
                <Typography variant="body2">
                  {Constants.bookDetails.tabs.synopsis}
                </Typography>
              </TextStyled>
            </TabPanel>
            <TabPanel value="2">
              <TextStyled>
                <Typography variant="body2">
                  {Constants.bookDetails.tabs.title2}
                </Typography>
              </TextStyled>
            </TabPanel>
            <TabPanel value="3">
              <TextStyled>
                <Typography variant="body2">
                  {Constants.bookDetails.tabs.title3}
                </Typography>
              </TextStyled>
            </TabPanel>
          </TabContext>
        </Box>
      </ThemeProvider>
      </>
  );
};

export default AboutBook;
