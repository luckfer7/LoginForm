import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --roxo: #2e073f;
        --branco: #ffffff;
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100vh;
        background-color: var(--roxo);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    
`

export default GlobalStyle;