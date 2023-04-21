import React, { Component } from 'react';
import studybuddiesThumbnail from "../img/studybuddies-thumbnail.png";
import givetakeThumbnail from "../img/givetake-thumbnail.png";
import projectscmsThumbnail from "../img/projectscms-thumbnail.png";
import seanThumbnail from "../img/sean-thumbnail.png";
import tsubakiThumbnail from "../img/tsubaki-thumbnail.png";
import animalDetectionThumbnail from "../img/animal_result.png";
import weatherThumbnail from "../img/weather-thumbnail.jpeg";
import WOW from "wowjs";

const Project = props => {
  return (
  <div className="project wow bounceInUp">
    <div className="project-thumbnail">
      <div className="thumbnail">
        {/* <a href={props.project.detaillink}><img className="thumbnail" src={props.project.thumbnail} alt="project thumbnail"/></a> */}
        <img src={props.project.thumbnail} alt="project thumbnail"/>
      </div>
      <p className="skills">{props.project.skills}</p>
    </div>
    <h3 className="project-title">
      <div>{props.project.title}</div>
      <div className="linkicons"> 
        <WebLink project={props.project} />
        <GithubLink project={props.project} />
      </div>
    </h3>
    <div>{props.project.type}</div>
  </div>
  );
}

const WebLink = props => {
  if (props.project.weblink){
    return (
      <a href={props.project.weblink} target="blank">
        <svg className="linkicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.79 15.79"><defs></defs><title>Asset 2</title><path className="cls-1" d="M15.07,0H9.33a.72.72,0,1,0,0,1.44h4L6,8.82a.72.72,0,0,0,1,1l7.39-7.39v4a.72.72,0,1,0,1.43,0V.72A.72.72,0,0,0,15.07,0Z"/><path className="cls-1" d="M12.2,7.18a.72.72,0,0,0-.72.72v6.46h-10v-10H7.9a.72.72,0,0,0,0-1.44H.72A.72.72,0,0,0,0,3.59V15.07a.72.72,0,0,0,.72.72H12.2a.72.72,0,0,0,.72-.72V7.9A.72.72,0,0,0,12.2,7.18Z"/></svg>
      </a>
    );
  }else{
    return null;
  }
}

const GithubLink = props => {
  if (props.project.githublink){
    return (
      <a href={props.project.githublink} target="blank">
        <svg className="linkicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.42 33.57"><defs></defs><title>Asset 19</title><path className="cls-1" d="M17.21,0a17.21,17.21,0,0,0-5.44,33.54c.86.16,1.13-.35,1.13-.81s0-1.55,0-3c-4.78,1-5.78-2.27-5.78-2.27A4.55,4.55,0,0,0,5.21,25c-1.56-1.07.12-1,.12-1A3.61,3.61,0,0,1,8,25.69a3.67,3.67,0,0,0,5,1.43,3.66,3.66,0,0,1,1.09-2.3c-3.82-.44-7.84-1.91-7.84-8.51A6.67,6.67,0,0,1,8,11.69a6.14,6.14,0,0,1,.17-4.55S9.62,6.68,12.9,8.9a16.3,16.3,0,0,1,8.62,0c3.29-2.22,4.73-1.76,4.73-1.76a6.14,6.14,0,0,1,.17,4.55,6.67,6.67,0,0,1,1.77,4.62c0,6.61-4,8.07-7.86,8.49A4.08,4.08,0,0,1,21.51,28v4.77c0,.46.28,1,1.15.8A17.21,17.21,0,0,0,17.21,0Z"/></svg>
      </a>
    );
  }else{
    return null;
  }
}

const projects = [
  // {detaillink: "/studybuddies", thumbnail: studybuddiesThumbnail, title: "STUDY BUDDIES", weblink: "https://mern-study-buddies.herokuapp.com/", githublink: "https://github.com/backy22/study-buddies", type: "Study Buddies is a full stack project with MongoDB, Express, React, Node.js, which is called MERN stack.", skills: "MongoDB, Express, React, Node.js, Redux, Heroku"},
  // {detaillink: "/givetake", thumbnail: givetakeThumbnail, title: "GIVE & TAKE APP", weblink: "https://givetake-pro.web.app", githublink: "https://github.com/backy22/givetake", type: "Give & Take app is a react project with firebase as database, authentification and hosting. Main feature of this app is realtime chat.", skills: "React, Redux, Material-UI, Firebase, Sketch, Mockup"},
  // {detaillink: "/projectscms", thumbnail: projectscmsThumbnail, title: "MY PROJECTS CMS", weblink: "https://backy22.github.io/html-portfolio/", githublink: "https://github.com/backy22/portfolio", type: "This CMS is for management of my all projects, using PHP and MySQL. The client site is responsive.", skills: "PHP, MySQL, HTML, CSS, Responsive"},
  // {detaillink: "/sean", thumbnail: seanThumbnail, title: "SEAN CONNERY'S WEBSITE", weblink: "https://backy22.github.io/sean-connery/", githublink: "https://github.com/backy22/sean-connery", type: "Sean Conney's webiste is a redesign project including research, wireframe, mockup and coding.", skills: "Wireframe, Mockup, Illustrator, Photoshop, HTML, CSS, JavaScript"},
  // {detaillink: "/tsubaki", thumbnail: tsubakiThumbnail, title: "DESIGN AGENT WEBSITE", weblink: "", githublink: "", type: "This project shows all design process I went through for the responsive design of the imaginary design agent.", skills: "Moodboard, Paper Prototyping, Mockup, Photoshop, Illustrator, XD"},
  {thumbnail: animalDetectionThumbnail, title: "ANIMAL DETECTION", weblink: "https://animal-detection.onrender.com/", githublink: "https://github.com/MingjiZhu/AnimalDetection", type: "This project is a simple animal detection app using YOLOv8 and OpenCV.", skills: "YOLOv8, OpenCV, Python, Flask, Render"},
  {thumbnail: weatherThumbnail, title: "Weather App", weblink: "https://master.d25q4j1ouiximk.amplifyapp.com/", githublink: "", type: "This project is a simple weather app using OpenWeatherMap API.", skills: "OpenWeatherMap API, HTML, CSS, JavaScript"},
]

export default class Projects extends Component {
  componentDidMount() {
		new WOW.WOW().init();
	}

  projectList() {
    return projects.map(project => {
      return <Project project={project} />;
    })
  }

  render() {
    return (
      <section id="projects">
        <h1><span className="highlight">Projects</span></h1>
        <div className="projects-wrapper">
          {this.projectList()}
        </div>
      </section>
    );
  }
}
