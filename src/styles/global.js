import { createGlobalStyle } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body{
    background: #9b65e6;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothig: antialiased !important;
    font-family: sans-serif;
  }
`;

export default GlobalStyle;
