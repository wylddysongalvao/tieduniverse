import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import Header from '../../components/header/index';
import About from '../../components/about/index';
import {
    Container,
} from "./styles.js";

function Home() {

    const [theme, setTheme] = useState('dark');

  return (
    <ThemeProvider theme={{mode:theme}}>
        <Container>
            <Header theme={theme} />
            <About>
              
            </About>

        </Container>
    </ThemeProvider>
  );
}

export default Home;