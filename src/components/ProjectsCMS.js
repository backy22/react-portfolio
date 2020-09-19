import React, { Component } from 'react';
import DetailMain from "./DetailMain";
import Overview from "./Overview";
import Product from "./Product";
import ProjectNav from "./ProjectNav";
import projectscmsMain from "../img/projectscms-main.png";

export default class ProjectsCMS extends Component {
  constructor(props){
    super(props);
    this.projectmain = {
      title: "My Projects CMS",
      type: "CMS & Responsive Design",
      skills: "PHP, MySQL, HTML, CSS, Responsive",
      weblink: "https://backy22.github.io/html-portfolio/",
      githublink: "https://github.com/backy22/portfolio",
      mainimg: projectscmsMain 
    }
    this.overview = {
      text: "I developed this website to show every project I worked on from 2018 to 2020. I can manage all information including image on the CMS made by PHP and the data is stored in MySQL. I used CSS Grid on front-end webiste and it is responsive."
    }
    this.projectproduct = {
      text: ["In this video, I'll show you create and edit a new item on the CMS. Please feel free to go to the actual website and check my all project!",
              <div className="video demo"><iframe width="853" height="480" src="https://www.youtube.com/embed/K0iUtd3Ah-U?&autoplay=1&rel=0&loop=1&playlist=K0iUtd3Ah-U" frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="product video"></iframe></div>],
      livelink: "https://backy22.github.io/html-portfolio/",
      codelink: "https://github.com/backy22/portfolio"
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render(){
    return (
      <div className="container">
        <DetailMain projectmain={this.projectmain}/>
        <Overview overview={this.overview} />
        <Product projectproduct={this.projectproduct}/>
       <ProjectNav prevproject="Give & Take App" prevlink="givetake" nextlink="sean" nextproject="Sean Connery's website"/>
      </div>
    );
  }
}
