import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Open Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        
        //  background-image: url(images/misc/bg-grid.jpg);
        background-color: black;
        background-attachment: fixed;
        color: #333333;
        font-size: 16px;
    }
`;