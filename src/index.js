import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GiveTake from "./components/GiveTake";
import Sean from "./components/Sean";
import Tsubaki from "./components/Tsubaki";
import Navbar from "./components/Navbar";


const routing = (
  <Router>
    <Navbar />
    <div>
      <Route exact path="/" component={App} />
      <Route path="/givetake" component={GiveTake} />
      <Route path="/sean" component={Sean} />
      <Route path="/tsubaki" component={Tsubaki} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
