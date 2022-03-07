import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  * {
    scrollbar-width: thin;
    scrollbar-color: #1D1934;
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: #8E48F6;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #1D1934;
    border-radius: 20px;
    border: 3px solid #8E48F6;
  }

  body {
    max-width: 100%;
    font-size: 20px;
    background-color: #1D1934;
    font-family: "Gilroy", sans-serif;
    margin: 0 auto;
    scrollbar-width: thin;
  }
`

export default GlobalStyle
