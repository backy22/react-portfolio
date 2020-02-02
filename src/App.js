import React from 'react';
import HomeMain from "./components/HomeMain";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <div className="container">
      <HomeMain />
      <Skills />
      <Projects />
      <About />
    </div>
  );
}

export default App;
