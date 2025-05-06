import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App';
import StudyBuddies from "./components/StudyBuddies";
import GiveTake from "./components/GiveTake";
import ProjectsCMS from "./components/ProjectsCMS";
import Sean from "./components/Sean";
import Tsubaki from "./components/Tsubaki";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/studybuddies" element={<StudyBuddies />} />
        <Route path="/givetake" element={<GiveTake />} />
        <Route path="/projectscms" element={<ProjectsCMS />} />
        <Route path="/sean" element={<Sean />} />
        <Route path="/tsubaki" element={<Tsubaki />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
