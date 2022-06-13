import { styled } from "@mui/styles";
import { ThemeProvider } from "@mui/material";
import Typography from "../../atoms/typography/Typography";
import theme from '../../theme/theme';

// const theme = createTheme({
//   components: {
//     MuiTypography: {
//       styleOverrides: {
//         body1: {
//           fontFamily: "Cera Pro",
//           fontWeight: "bold",
//           fontSize: "16px",
//           lineHeight: "24px",
//           color: "#03314B",
//         },
//         body2: {
//           fontFamily: "Cera Pro",
//           fontSize: "16px",
//           lineHeight: "24px",
//           color: "#6D787E",
//         },
//       },
//     },
//   },
// });

interface Props {
  title: string;
  data: Array<string>;
}

const Container = styled("div")({
  width: "214px",
  height: "224px",
});

const ListItems = styled("div")({
  margin: " 16px 0px",
});

const FooterNav = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="body1">{props.title}</Typography>
        {props.data.map((text, index) => {
          return (
            <ListItems key={index}>
              <Typography variant="body2">{text}</Typography>
            </ListItems>
          );
        })}
      </Container>
    </ThemeProvider>
  );
};

export default FooterNav;
