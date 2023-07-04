import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: sans-serif;
    }
    body{
        width: 100vw;
        height: 100vh;
        background-color: #0F1923;
        overflow-x: hidden;
    }
    a{
        text-decoration: none;
    }
`

export default GlobalStyle