import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'themes/globalStyles'
import { LightTheme, DarkTheme } from 'themes';

import Header from 'layout/Header';
import Main from 'layout/Main';
import BackgroundComponent from 'components/MainBackground'
import bgDark from 'assets/images/background/dark-bg.jpg';
import bgLight from 'assets/images/background/light-bg.jpg';

const App = () => {
    const [theme, setTheme] = useState('light');

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
            <GlobalStyles />
            <BackgroundComponent bgUrl={theme === 'light' ? bgLight : bgDark}>
                <Header onChangeTheme={themeToggler} />
                <Main />
            </BackgroundComponent>
        </ThemeProvider>
    )
}

export default App;