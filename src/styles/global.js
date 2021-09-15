import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, main {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section, main {
    display: block;
  }

  body {
    line-height: 1;
    font-family:  'Baloo 2', Helvetica, Arial, sans-serif;

    --background: #282828;
    --boundary: #3c3836;
    --boundarysoft: #504945;
    --selection: #7c6f64;
    --gradient3: #bdae93;
    --boundarylight: #a89984;

    --foreground: #ebdbb2;
    --primary: #83a598;
    --secondary: #fabd2f;
    --warning: #b8bb26;
    --info: #8ec07c;
    --danger: #fe8019;

    color: var(--foreground);
    background: var(--background);
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }
`;

export default GlobalStyles;
