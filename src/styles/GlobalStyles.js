/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: GlobalStyles.js
Created:  2022-05-22T02:01:26.234Z
Modified: 2022-05-25T06:50:44.519Z
*/

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  body {
    background: #fefefe;
    height: 100vh;
    margin: 0 auto;
    max-width: 500px;
    overscroll-behavior: none;
    width: 100%;
  }

  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    min-height: 100vh;
    padding-bottom: 50px;
  }
`
