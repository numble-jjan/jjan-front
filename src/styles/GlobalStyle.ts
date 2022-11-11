import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body {
    width: 320px;
    height: 648px;
  }
`;

export default GlobalStyle;
