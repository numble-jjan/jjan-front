import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 100;
  src: url('../assets/fonts/NotoSansKR-Light.woff2') format('woff2'),
    url('../assets/fonts/NotoSansKR-Light.woff') format('woff'),
    url('../assets/fonts/NotoSansKR-Light.otf') format('truetype');
  }

  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: normal;
    src: url('./fonts/NotoSansKR-Regular.woff2') format('woff2'),
      url('../assets/fonts/NotoSansKR-Regular.woff') format('woff'),
      url('../assets/fonts/NotoSansKR-Regular.otf') format('truetype');
  }

  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    src: url('./fonts/NotoSansKR-Medium.woff2') format('woff2'),
      url('./fonts/NotoSansKR-Medium.woff') format('woff'),
      url('./fonts/NotoSansKR-Medium.otf') format('truetype');
  }

  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: bold;
    src: url('../assets/fonts/NotoSansKR-Bold.woff2') format('woff2'),
      url('../assets/fonts/NotoSansKR-Bold.woff') format('woff'),
      url('../assets/fonts/NotoSansKR-Bold.otf') format('truetype');
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
