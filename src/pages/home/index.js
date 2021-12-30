import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import Header from '../../components/header/index';
import {
    Container,
} from "./styles.js";

function Home() {

    const [theme, setTheme] = useState('dark');

  return (
    <ThemeProvider theme={{mode:theme}}>
        <Container>
            <Header theme={theme} />

        </Container>
    </ThemeProvider>
  );
}

export default Home;