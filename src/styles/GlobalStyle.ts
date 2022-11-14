import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './global.css';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body {
    font-family: 'Noto Sans KR', sans-serif;   
    font-style: normal;
    font-weight: nomal;
  }
`;

export default GlobalStyle;
