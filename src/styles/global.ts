import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root {
        --white: #FFFFFF;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--background);
    }

    body, input, textarea, button {
        font-family: 'Alata', sans-serif;
        font-family: 'Josefin Sans', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-family: 'Alata', sans-serif;
    }

    button {
        cursor: pointer;
    }

    ::-webkit-scrollbar {
        width: 3px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 3px;
    }
`;