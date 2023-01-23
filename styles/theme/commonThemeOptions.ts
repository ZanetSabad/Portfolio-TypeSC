// @mui
import { ThemeOptions } from '@mui/material';

const commonThemeOptions: ThemeOptions = {
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          margin: 0,
        },     
      },
    },
    MuiButton: {
      styleOverrides: {
        text: {
            fontSize: "20px",
            textDecoration: "none",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          zIndex: "0"
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          color: "white"
        },
      },
    },
  },
};

export default commonThemeOptions;