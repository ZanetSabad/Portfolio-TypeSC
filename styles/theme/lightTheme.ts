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
      light: '#89345e',
      dark: '#B24531',
      contrastText: '#111111',
    },
    secondary: {
      main: '#45A9BF',
      light: '#4DABF5',
      dark: '#1769AA',
      contrastText: 'black',
    },
    info: {
      main: '#111111',
      light: '#FFFFFF',
      dark: '#B2B2B2',
      contrastText: '#FF6347',
    },
    background: {
      default: 'white',
      paper: '#fff',
    },
    text: {
      primary: '#111111',
      secondary: '#383838',
      disabled: '#777777',
    },
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