import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './global.css';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * { 
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;   
    font-style: normal;
  }
`;

export default GlobalStyle;
