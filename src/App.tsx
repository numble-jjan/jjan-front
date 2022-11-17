import React from 'react';
import AppRouter from './AppRouter';
import { Root } from './styles/home';

function App() {
  return (
    <React.Fragment>
      <AppRouter />
      <Root>
        <img src="/logo.png" />
      </Root>
    </React.Fragment>
  );
}

export default App;
