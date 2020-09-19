import React, { Component } from 'react';
import DetailMain from "./DetailMain";
import Overview from "./Overview";
import Wireframes from "./Wireframes";
import StyleGuide from "./StyleGuide";
import Mockup from "./Mockup";
import Product from "./Product";
import ProjectNav from "./ProjectNav";
import seanMain from "../img/sean-main.png";
import seanMockup from "../img/sean-mockup.png";

export default class Sean extends Component {
   constructor(props){
    super(props);
    this.projectmain = {
      title: "Sean Connery's website",
      type: "Redesign",
      skills: "Wireframe, Mockup, Illustrator, Photoshop, HTML, CSS, JavaScript",
      weblink: "https://backy22.github.io/sean-connery/",
      githublink: "https://github.com/backy22/sean-connery",
      mainimg: seanMain 
    }
    this.overview = {
      text: "This project was redesigning Sean Connery's official site. I began by assessing the current website and completely rethought the design and the structure of the website. Next, I defined the purpose of the website. I want to introduce him because he has already retired and the existing website is a non-commercial site. I set keywords which are 'successful,' 'historic,' 'elegant,' 'formal' and 'timeless.' "
    }
    this.projectmockup = {
      text: "Keeping consistency in every page was the most difficult point of the project, because I tried to use various techniques to achieve the goal. I decided to focus on the four columns layout with randomness and removed some content which was not important. As a result, I kept consistency as well as achieved the goal of the website.",
      mockuplink: "",
      images: [seanMockup]
    }
    this.projectproduct = {
      text: "In the front-end development, I made use of a Grid system.",
      livelink: "https://backy22.github.io/sean-connery/",
      codelink: "https://github.com/backy22/sean-connery"
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render(){
    return (
      <div className="container">
        <DetailMain projectmain={this.projectmain} />
        <Overview overview={this.overview} />
        <Wireframes />
        <StyleGuide />
        <Mockup projectmockup={this.projectmockup} />
        <Product projectproduct={this.projectproduct} />
        <ProjectNav prevproject="My Projects CMS" prevlink="projectscms" nextlink="tsubaki" nextproject="Design Agent website" />
      </div>
    );
  }
}
