import {
  CssBaseline,
  GlobalStyles,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material';

import mapleLifeTheme from './theme';
import Main from './component/Main';
import { RecoilRoot } from 'recoil';

function App() {
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
              position: 'relative',
            },
          }}
        />
        <RecoilRoot>
          <Main />
        </RecoilRoot>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
