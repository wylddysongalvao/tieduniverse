import styled from "styled-components";
import theme from 'styled-theming'

const backgroundTheme = theme("mode", {
    light: "#000",
    dark: "#fff"
});

const backgroundText = theme("mode", {
    light: "#000",
    dark: "#fff"
});

export const Header = styled.header`
    display: flex;
    height: 10vh;
    flex-direction:row,
    justify-content: center;
    align-items: center;
    font-family: 'Arimo', sans-serif;
    color: ${backgroundTheme};  
`;

export const Logo = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
`;

export const Box = styled.div`
    display: flex;
    margin-left: 4rem
`;

export const Menu = styled.main`
`;

export const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    font-size: 1rem;
`;

export const Li = styled.li`
    margin: 10px;
    cursor: pointer;
`;

export const TextTide = styled.i`
    color: #22AEDF;
    font-weight: 800;
`;

export const TextLogo = styled.i`
    color: ${backgroundText};
    font-weight: 800;
`;

export const ButtonGitHub = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 30px;
    background-color: #000;
`;