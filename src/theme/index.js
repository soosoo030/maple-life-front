import { createTheme } from '@mui/material';
import createPalette from '@mui/material/styles/createPalette';

const palette = createPalette({
  primary: {
    light: '#CFCB6E',
    main: '#9C9A40',
    dark: '#6B6C10',
    contrastText: '#FFFFFF',
  },
  secondary: {
    light: '#FFAB6E',
    main: '#D17B41',
    dark: '#9B4E15',
    contrastText: '#FFFFFF',
  },
  background: {
    default: '#FAEDCD',
  },
});

const mapleLifeTheme = createTheme({
  palette,
  typography: {
    fontFamily: 'Gowun Dodum',
  },
});
export default mapleLifeTheme;
