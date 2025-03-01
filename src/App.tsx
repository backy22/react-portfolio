import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import Navbar from './components/Navbar';
import HomeMain from "./components/HomeMain";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <div className="container">
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <HomeMain />
        <Skills />
        <Projects />
        <About />
      </div>
    </ThemeProvider>
  );
};

export default App; 