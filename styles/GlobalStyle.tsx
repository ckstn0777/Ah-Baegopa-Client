import { css, Global } from '@emotion/react'

const global = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
  }
  html,
  body {
    height: 100%;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  button {
    border: none;
    background-color: transparent;
  }
  textarea,
  input {
    border: none;
    resize: none;
    outline: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  a,
  a:link:hover,
  a:-webkit-any-link {
    text-decoration: none;
  }
`

const GlobalStyle = () => <Global styles={global} />

export default GlobalStyle
