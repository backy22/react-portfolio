import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import App from './App';
import StudyBuddies from "./components/StudyBuddies";
import GiveTake from "./components/GiveTake";
import ProjectsCMS from "./components/ProjectsCMS";
import Sean from "./components/Sean";
import Tsubaki from "./components/Tsubaki";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const routing = (
  <Router>
    <Navbar />
    <div>
      <Route exact path="/" component={App} />
      <Route path="/studybuddies" component={StudyBuddies} />
      <Route path="/givetake" component={GiveTake} />
      <Route path="/projectscms" component={ProjectsCMS} />
      <Route path="/sean" component={Sean} />
      <Route path="/tsubaki" component={Tsubaki} />
    </div>
    <Footer />
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
