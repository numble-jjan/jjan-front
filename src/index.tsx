import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import App from './App';

import GlobalStyle from './styles/GlobalStyle';
import GlobalFonts from './styles/GlobalFonts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <GlobalFonts />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
);
