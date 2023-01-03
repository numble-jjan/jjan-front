import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import NotoSans_KR_Bold_O from '../assets/fonts/NotoSansKR-Bold.otf';
import NotoSans_KR_Bold_W from '../assets/fonts/NotoSansKR-Bold.woff';
import NotoSans_KR_Bold_W2 from '../assets/fonts/NotoSansKR-Bold.woff2';
import NotoSansKR_Regular_O from '../assets/fonts/NotoSansKR-Regular.otf';
import NotoSansKR_Regular_W from '../assets/fonts/NotoSansKR-Regular.woff';
import NotoSansKR_Regular_W2 from '../assets/fonts/NotoSansKR-Regular.woff2';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-display: auto;
    src: url(${NotoSansKR_Regular_W2}) format('woff2'),
      url(${NotoSansKR_Regular_W}) format('woff'),
      url(${NotoSansKR_Regular_O}) format('truetype');
  }

  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-display: auto;
    src: url(${NotoSans_KR_Bold_W2}) format('woff2'),
      url(${NotoSans_KR_Bold_W}) format('woff'),
      url(${NotoSans_KR_Bold_O}) format('truetype');
  }
  
  * { 
    box-sizing: border-box; 
    font-style: normal;
    font-family: 'Noto Sans KR', sans-serif;  
    
  }
  
  body{
    font-family: 'Noto Sans KR';
    @media (max-width:576px){
      width: 100%;
    }
  }

  #backdrop, #modal {
    position: relative;
    z-index: 10;
  }

  input {
    border: none;
    outline: none;
  }

  textarea {
    bordeR: none;
    resize: none;
    outline:none;
  }

  button {
    border: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
