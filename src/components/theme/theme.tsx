import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   components: {
//     MuiTypography: {
//       styleOverrides: {
//         h1: {
//
//           fontWeight: "bold",
//           fontSize: "36px",
//           lineHeight: "45px",
//           color: "#03314B",
//         },
//         h3: {
//
//           fontStyle: "normal",
//           fontWeight: "700",
//           fontSize: "24px",
//           lineHeight: "30px",
//           color: "#03314B",
//         },
//         body1: {
//
//           fontStyle: "normal",
//           fontWeight: "500",
//           fontSize: "16px",
//           lineHeight: "20px",
//           color: "#03314B",
//         },
//         body2: {
//
//           fontSize: "16px",
//           lineHeight: "24px",
//           color: "#6D787E",
//         },

//         subtitle2: {
//
//           fontWeight: "400px",
//           fontSize: "18px",
//           lineHeight: "22.63px",
//           color: "#6D787E",
//         },
//         subtitle1: {
//
//           fontWeight: "medium",
//           fontSize: "24px",
//           lineHeight: "32px",
//           color: "#0365F2",
//         },
//         caption: {
//
//           fontWeight: "regular",
//           fontSize: "14px",
//           lineHeight: "22px",
//           color: "#6D787E",
//         },
//       },
//     },
//     MuiTab: {
//       styleOverrides: {
//         root: {
//           textTransform: "capitalize",
//           placeItems: "flex-start",
//
//           fontSize: "18px",
//           lineHeight: "23px",
//         },
//       },
//     },
//   },
//   palette: {
//     primary: {
//       main: "#22C870",
//     },
//   },
// });

const theme = createTheme({
  typography: {
    fontFamily: "Cera Pro",
    h1: {
      fontWeight: "bold",
      fontSize: "36px",
      lineHeight: "45px",
      color: "#03314B",
    },
    h3: {
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "24px",
      lineHeight: "30px",
      color: "#03314B",
    },
    body1: {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "20.11px",
      color: "#03314B",
    },
    body2: {
      fontSize: "16px",
      lineHeight: "24px",
      color: "#6D787E",
    },

    subtitle2: {
      fontWeight: "400px",
      fontSize: "18px",
      lineHeight: "22.63px",
      color: "#6D787E",
    },
    subtitle1: {
      fontWeight: "medium",
      fontSize: "24px",
      lineHeight: "32px",
      color: "#0365F2",
    },
    caption: {
      fontWeight: "regular",
      fontSize: "14px",
      lineHeight: "22px",
      color: "#6D787E",
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          placeItems: "flex-start",

          fontSize: "18px",
          lineHeight: "23px",
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

export default theme;
