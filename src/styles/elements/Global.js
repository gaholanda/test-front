import { createGlobalStyle } from "styled-components";

const GlobalCSS = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Helvetica, Arial, sans-serif;
    background: #EEE;
  }
`;

export default GlobalCSS;
