import styled from "styled-components";
import theme from 'styled-theming'

const backgroundTheme = theme("mode", {
    light: "#fff",
    dark: "#211D2B"
});

const colors = {
    blue: "#22AEDF",
    blueLight: "#3BD5F0",
    blueDark: "#0F6C8E",
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: ${backgroundTheme};
    color: var(--white);
    font-family: 'Arimo', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.1em;
    text-align: center;
`;

