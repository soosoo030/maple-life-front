import {
  ThemeProvider,
  StyledEngineProvider,
  CssBaseline,
  GlobalStyles,
} from '@mui/material';

import mapleLifeTheme from './theme';
import { BrowserRouter, Switch } from 'react-router-dom';
import { generateRoutes, routers } from './routes';
import * as eva from 'eva-icons';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    eva.replace();
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={mapleLifeTheme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: {
              width: '100%',
              height: '100vh',
            },
            'div#root': {
              width: '100%',
              height: '100%',
            },
          }}
        />
        <BrowserRouter>
          <Switch>{generateRoutes(routers)}</Switch>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
