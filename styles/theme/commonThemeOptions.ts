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
            fontSize: '20px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          zIndex: '0'
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          color: 'white',
          zIndex: '0',
        },
      },
    },
    // MuiButtonBase: {
    //   styleOverrides: {
    //     root: {
    //         textDecoratiom: 'none',
    //     },
    //   },
    // },
    MuiTypography: {
      styleOverrides: {
        root: {
            lineHeight: '2em',
            textDecoration: 'none',
        },
      },
    },
  },
};

export default commonThemeOptions;