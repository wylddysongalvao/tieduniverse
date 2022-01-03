import styled from "styled-components";
import theme from 'styled-theming'
import GitIcon from '../../assets/github.svg';

const backgroundTheme = theme("mode", {
    light: "#000",
    dark: "#fff"
});

const backgroundText = theme("mode", {
    light: "#000",
    dark: "#fff"
});

export const Header = styled.header`
    display:flex;
    flex-direction: row;
    height: 10vh;
    justify-content:space-between;
    width: 100vw;
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
    width:100%
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
    justify-content: space-evenly;
    align-items: center;
    width: 130px;
    height: 35px;
    background-color:#fff;
    cursor: pointer;
    margin-right: 4rem;
    border-radius: 3px;
    transform: 200ms easy-in-out;
`;

export const GitHub = styled.a`
    display:block;
    width:25px;
    height:25px;
    background-image: url(${GitIcon});
    background-size: contain;
    background-repeat: no-repeat;
`;

export const TextButton = styled.p`
    color:#000;
    font-size: 1.2rem;
`;