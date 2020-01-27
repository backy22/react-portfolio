import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeMain from "./components/HomeMain";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="container">
        <HomeMain />
        <Skills />
        <Projects />
        <About />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
