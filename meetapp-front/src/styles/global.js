import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    background: linear-gradient(180deg, #22202C, #402845);
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px sans-serif;
  }

  a {
    text-decoration: none
  }

  ul, li {
    list-style: none
  }

  button {
    cursor: pointer
  }


`;
