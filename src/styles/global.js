import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

export const Global = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');
    
    *{
        font-family: 'Arimo', sans-serif;
        margin:0,
        padding:0;        
    }

    :root {
        --primary: #211D2B;
        --orange: #f57c00;
        --white: #FFFFFF;
        --black: #000;
        --orange-light: ##ff7134;
        --yellow: #ffc107;
        --dark: #14141C;
        --dark-light: #171721;
        --dark-extra: #171721;

    }

`;