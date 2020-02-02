import React, { Component } from 'react';
import weblink from "../img/weblink.svg";
import githublink from "../img/githublink.svg";
import givetakeThumbnail from "../img/givetake-thumbnail.png";
import seanThumbnail from "../img/sean-thumbnail.png";
import tsubakiThumbnail from "../img/tsubaki-thumbnail.png";

const Project = props => {
  return (
  <div className="project">
    <a href={props.project.detaillink}><img className="thumbnail" src={props.project.thumbnail} alt="project thumbnail"/></a>
    <h2 className="project-title">
      {props.project.title}
      <WebLink project={props.project} />
      <GithubLink project={props.project} />
    </h2>
    <div>{props.project.type}</div>
    <p>{props.project.skills}</p>
  </div>
  );
}

const WebLink = props => {
  if (props.project.weblink){
    return (
      <a href={props.project.weblink} target="blank"><img className="linkicon" src={weblink} alt="web link icon"/></a>
    );
  }else{
    return null;
  }
}

const GithubLink = props => {
  if (props.project.githublink){
    return (
      <a href={props.project.githublink} target="blank"><img className="linkicon" src={githublink} alt="github icon"/></a>
    );
  }else{
    return null;
  }
}

const projects = [
  {detaillink: "/givetake", thumbnail: givetakeThumbnail, title: "Give & Take App", weblink: "https://givetake-pro.web.app", githublink: "https://github.com/backy22/givetake", type: "React project", skills: "Sketch, Mockup, React, Redux, Material-UI, Firebase"},
  {detaillink: "/sean", thumbnail: seanThumbnail, title: "Sean Connery's website", weblink: "https://ayatsubakino.com/webd100/finalassignment/", githublink: "https://github.com/backy22/web_tech1/tree/master/finalassignment", type: "Redesign", skills: "Wireframe, Mockup, Illustrator, Photoshop, HTML, CSS, JavaScript"},
  {detaillink: "/tsubaki", thumbnail: tsubakiThumbnail, title: "Design Agent website", weblink: "", githublink: "", type: "Responsive design", skills: "Moodboard, Paper Prototyping, Mockup, Photoshop, Illustrator, XD"}
]

export default class Projects extends Component {
  projectList() {
    return projects.map(project => {
      return <Project project={project} />;
    })
  }

  render() {
    return (
      <section id="projects">
        <h1>Projects</h1>
        <div className="projects-wrapper">
          {this.projectList()}
        </div>
        <div className="linktoarchive">
          <a href="https://ayatsubakino.com/archive" target="blank"><i class="fas fa-arrow-right"></i> All Projects</a>
        </div>
      </section>
    );
  }
}
