import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';

import App from './App';

import GlobalStyle from './styles/GlobalStyle';

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
        <App />
      </IndexPageWrapper>
    </RecoilRoot>
  </React.StrictMode>,
);
