import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeMain from "./components/HomeMain";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import BlogList from "./components/BlogList";
import Blog from "./components/Blog";
import { lightTheme, darkTheme } from './styles/theme.css';
import './styles/styles.css';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`root ${isDarkMode ? darkTheme : lightTheme}`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={
          <>
            <HomeMain />
            <Skills />
            <Projects />
            <About />
          </>
        } />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:slug" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default App; 