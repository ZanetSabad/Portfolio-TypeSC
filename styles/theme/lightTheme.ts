// @mui
import { createTheme } from '@mui/material/styles';
// common theme options
import commonThemeOptions from 'styles/theme/commonThemeOptions';

const { components: commonComponentsOptions } = commonThemeOptions;

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#89345e',
      // light: '#89345e',
      // dark: '#B24531',
      contrastText: '#010D00',
    },
    secondary: {
      main: '#45A9BF',
      // light: '#4DABF5',
      // dark: '#1769AA',
      contrastText: '#010D00',
    },
    info: {
      main: '#010D00',
      // light: '#FFFFFF',
      // dark: '#B2B2B2',
      // contrastText: '#FF6347',
    },
    background: {
      default: 'white',
      paper: '#fff',
    },
    text: {
      primary: '#010D00',
      secondary: '#45A9BF',
      // disabled: '#777777',
    },
  },
  typography: {
    fontFamily: [
      'Inconsolata, monospace',
    ].join (",")

  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          color: '#383838',
        },
      },
    },
    ...commonComponentsOptions,
  },
});

export default lightTheme;