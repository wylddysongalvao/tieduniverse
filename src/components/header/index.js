import React from "react";
import { ThemeProvider } from "styled-components";

import {
    Header,
    Ul,
    Li,
    Logo,
    Menu,
    TextTide,
    TextLogo,
    Box,
    ButtonGitHub,
    GitHub,
    TextButton

} from  "./styles";

function HeaderComponent({theme}) {
    return (
        <ThemeProvider theme={{mode:theme}}>
            <Header>
                <Box>
                    <Logo>
                        <TextTide>
                            Tide
                        </TextTide>
                        <TextLogo>
                            Universe
                        </TextLogo>
                    </Logo>

                    <Menu>
                        <Ul>
                            <Li>
                                Desafios
                            </Li>

                            <Li>
                                Seus projetos
                            </Li>

                            <Li>
                                Comunidade
                            </Li>
                        </Ul>
                    </Menu>
                </Box>

                <ButtonGitHub>
                    <TextButton>Login</TextButton>
                    <GitHub />
                </ButtonGitHub>

            </Header>
        </ThemeProvider>
    );
}

export default HeaderComponent;