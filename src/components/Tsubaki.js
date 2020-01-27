import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import DetailMain from "./DetailMain";
import Overview from "./Overview";
import Logo from "./Logo";
import BrandingPackage from "./BrandingPackage";
import Moodboard from "./Moodboard";
import PaperPrototyping from "./PaperPrototyping";
import Mockup from "./Mockup";
import Footer from "./Footer";
import tsubakiMain from "../img/tsubaki-main.png";

export default class Sean extends Component {
   constructor(props){
    super(props);
    this.projectmain = {
      title: "Design Agent website",
      type: "Responsive design",
      skills: "Moodboard, Paper Prototyping, Mockup, Photoshop, Illustrator, XD",
      weblink: "https://ayatsubakino.com/webd100/finalassignment/",
      mainimg: tsubakiMain 
    }
    this.overview = "This project included creating a logo, branding identity and website for my fictional company, called “tsubaki.” This company serves web design and web development."
    this.projectmockup = {
      text: "Using a lot of yellow makes the website look cheerful along with active font. I made high fidelity mock-ups for mobile and desktop websites. ",
      mockuplink: "",
      youtubelinks: ['WGBAfsfIAiY','5JyUjQvLiK8']
    }
    
  }

  render(){
    return (
      <Router>
        <div className="container">
          <DetailMain projectmain={this.projectmain} />
          <Overview overview={this.overview} />
          <Logo />
          <BrandingPackage />
          <Moodboard />
          <PaperPrototyping />
          <Mockup projectmockup={this.projectmockup} />
          <Footer />
        </div>
      </Router>
    );
  }
}
