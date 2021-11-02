import {
  ThemeProvider,
  StyledEngineProvider,
  CssBaseline,
} from '@mui/material';

import mapleLifeTheme from './theme';
import { BrowserRouter, Switch } from 'react-router-dom';
import { generateRoutes, routers } from './routes';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={mapleLifeTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>{generateRoutes(routers)}</Switch>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
