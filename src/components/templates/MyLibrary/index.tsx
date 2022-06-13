import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material";
import styled from "@emotion/styled";
// import Footer from "../../organisms/Footer/Footer";

interface Props {
  header: React.ReactNode;
  heading: React.ReactNode;
  tab: React.ReactNode;
  // footer: React.ReactNode;
}

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: "#03314B",
          fontFamily: "Cera Pro",
          fontSize: "36px",
          lineHeight: "45px",
          fontStyle: "normal",
          fontWeight: "700",
        },
      },
    },
  },
});

const useStyles = makeStyles({
  heading: {
    marginTop: "59px",
  },
});

const MyLibrary = (props: Props) => {
  const style = useStyles();
  return (
    <ThemeProvider theme={theme}>
      {props.header}
      <Container>
        <Box sx={{ width: "912px", margin: "59px auto " }}>
          <div className={style.heading}>{props.heading}</div>
          {props.tab}
        </Box>
      </Container>
      {/* {props.footer} */}
      {/* <Footer /> */}
    </ThemeProvider>
  );
};

export default MyLibrary;
