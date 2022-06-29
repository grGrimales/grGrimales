import { createTheme } from "@mui/material";
import { red, common } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#19857b",
    },

    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },

  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: "fixed",
      },
      styleOverrides: {
        root: {
          backgroundColor: common.black,
          height: 60,
          color: "white",
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },
});
