import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import GlobalFonts from './styles/GlobalFonts';

const IndexPageWrapper = styled.div`
  width: 320px;
  height: 658px;
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <IndexPageWrapper>
        <GlobalStyle />
        <GlobalFonts />
        <App />
      </IndexPageWrapper>
    </RecoilRoot>
  </React.StrictMode>,
);
