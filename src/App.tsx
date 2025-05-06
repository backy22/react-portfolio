import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeMain from "./components/HomeMain";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import { lightTheme, darkTheme } from './styles/theme.css';
import './styles/styles.css';

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
    <div className={`root ${isDarkMode ? darkTheme : lightTheme}`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <HomeMain />
      <Skills />
      <Projects />
      <About />
    </div>
  )

};

export default App; 