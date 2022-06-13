import { styled } from "@mui/styles";
import { ThemeProvider } from "@mui/material";
import Typography from "../../atoms/typography/Typography";
import Logo from "../../atoms/icons/Icons";
import FooterNav from "../FooterNav/FooterNav";
import data from "../../../data/FooterNav";
import Constants from "../../../data/Constants";
import theme from '../../theme/theme';

// const theme = createTheme({
//   components: {
//     MuiTypography: {
//       styleOverrides: {
//         subtitle1: {
//           fontFamily: "Cera Pro",
//           fontWeight: "medium",
//           fontSize: "24px",
//           lineHeight: "32px",
//           color: "#0365F2",
//         },
//         caption: {
//           fontFamily: "Cera Pro",
//           fontWeight: "regular",
//           fontSize: "14px",
//           lineHeight: "22px",
//           color: "#6D787E",
//         },
//       },
//     },
//   },
// });

const Container = styled("div")({
  width: "100%",
  height: "370px",
  gap: "48px",
  backgroundColor: "#F1F6F4",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  left: 0,
  bottom: 0,
  right: 0,
});

const InnerFrame = styled("div")({
  width: "952px",
  height: "224px",
  gap: "32px",
  position: "relative",
  top: "38px",
  display: "flex",
  // left: "244px",
  bottom: "108px",
  margin: "0 auto",
});

const LeftFrame = styled("div")({
  width: "378px",
  height: "120px",
});

const TypographyFrame = styled("div")({
  position: "relative",
  top: "56px",
  color: "#0365F2",
});

const RightFrame = styled("div")({
  width: "542px",
  height: "224px",
  display: "flex",
});

const BottomFrame = styled("div")({
  width: "546px",
  height: "22px",
  position: "relative",
  top: "48px",
  // left: "244px",
  margin: "0 auto",
});

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <InnerFrame>
            <LeftFrame>
              <Logo />
              <TypographyFrame>
                <Typography variant="subtitle1">
                  {Constants.footer.description1}
                </Typography>
                <Typography variant="subtitle1">
                  {Constants.footer.description2}
                </Typography>
              </TypographyFrame>
            </LeftFrame>
            <RightFrame>
              <FooterNav title="Editorial" data={data.Editorial} />
              <FooterNav title="Useful Links" data={data.UsefulLinks} />
              <FooterNav title="Company" data={data.Company} />
            </RightFrame>
          </InnerFrame>
          <BottomFrame>
            <Typography variant="caption">{Constants.footer.footer}</Typography>
          </BottomFrame>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Footer;
