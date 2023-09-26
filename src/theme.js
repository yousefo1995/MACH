import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 750,
      lg: 1024,
      xl: 1280,
      xxl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#524A4E",
    },
    secondary: {
      main: "#FF5C8D",
    },
    action: {
      main: "#F4EEA9",
    },
    // info: {
    //   main: "#5799ef",
    // },
  },
  typography: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 700,
    },
  },
});

export default theme;
