import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import NotoSans_KR_Bold_O from '../assets/fonts/NotoSansKR-Bold.otf';
import NotoSans_KR_Bold_W from '../assets/fonts/NotoSansKR-Bold.woff';
import NotoSans_KR_Bold_W2 from '../assets/fonts/NotoSansKR-Bold.woff2';
import NotoSansKR_Light_O from '../assets/fonts/NotoSansKR-Light.otf';
import NotoSansKR_Light_W from '../assets/fonts/NotoSansKR-Light.woff';
import NotoSansKR_Light_W2 from '../assets/fonts/NotoSansKR-Light.woff2';
import NotoSansKR_Medium_O from '../assets/fonts/NotoSansKR-Medium.otf';
import NotoSansKR_Medium_W from '../assets/fonts/NotoSansKR-Medium.woff';
import NotoSansKR_Medium_W2 from '../assets/fonts/NotoSansKR-Medium.woff2';
import NotoSansKR_Regular_O from '../assets/fonts/NotoSansKR-Regular.otf';
import NotoSansKR_Regular_W from '../assets/fonts/NotoSansKR-Regular.woff';
import NotoSansKR_Regular_W2 from '../assets/fonts/NotoSansKR-Regular.woff2';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 100;
  src: url(${NotoSansKR_Light_W2}) format('woff2'),
    url(${NotoSansKR_Light_W}) format('woff'),
    url(${NotoSansKR_Light_O}) format('truetype');
  }

  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: normal;
    src: url(${NotoSansKR_Regular_W2}) format('woff2'),
      url(${NotoSansKR_Regular_W}) format('woff'),
      url(${NotoSansKR_Regular_O}) format('truetype');
  }

  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    src: url(${NotoSansKR_Medium_W2}) format('woff2'),
      url(${NotoSansKR_Medium_W}) format('woff'),
      url(${NotoSansKR_Medium_O}) format('truetype');
  }

  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: bold;
    src: url(${NotoSans_KR_Bold_W2}) format('woff2'),
      url(${NotoSans_KR_Bold_W}) format('woff'),
      url(${NotoSans_KR_Bold_O}) format('truetype');
  }
  
  * { 
    box-sizing: border-box; 
    font-style: normal;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;  
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
