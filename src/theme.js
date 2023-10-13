import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 750,
      ml: 850,
      lg: 1024,
      xl: 1280,
      xxl: 1920,
    },
  },
  palette: {
    primary: {
      // main: "#524A4E",
      main: "#0F202A", //from our values website idea  https://www.renderforest.com/website-maker/preview/lang/template/144/gallery/?backUrl=websites%3Fs%3Dcompany%2Bprofile
      // main: "#2D445C",
    },
    secondary: {
      // main: "#FF5C8D",
      // main: "#E17870", // from cover
      main: "#AD6B71", // from cover  1111
      // main: "#327C14", // logo color
      // main: "#E79E00", //from our values website idea  https://www.renderforest.com/website-maker/preview/lang/template/144/gallery/?backUrl=websites%3Fs%3Dcompany%2Bprofile
      // main: "#60858D", ///  222222
      // main: "#A47C81", //  44444
      // main: "#708D81",
      // main: "#5D7E92", /// 33333
      // main: "#789C8B",
      // main: "#6E7B8B",
    },
    action: {
      main: "#F4EEA9",
    },
    // info: {
    //   main: "#5799ef",
    // },
    iconFooter: {
      main: "#fff",
    },
  },
  typography: {
    // fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontFamily: "Montserrat, sans-serif",

    h1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem", // 1.2rem and check on responsive  ===============================================
      fontWeight: 600, // 500
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 700,
    },
  },
});

export default theme;
