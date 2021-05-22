import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
  }

  body {
    font-family: Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  .app {
    background-color: #ffffff;
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  p,
  label {
    font-family: Lato, Georgia, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
