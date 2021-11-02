import {
  ThemeProvider,
  StyledEngineProvider,
  CssBaseline,
} from '@mui/material';

import mapleLifeTheme from './theme';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={mapleLifeTheme}>
        <CssBaseline />
        <div>Hello World</div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
