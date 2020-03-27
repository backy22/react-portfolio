import React, { Component } from 'react';
import DetailMain from "./DetailMain";
import Overview from "./Overview";
import Product from "./Product";
import ProjectNav from "./ProjectNav";
import studybuddiesMain from "../img/studybuddies-main.png";
import studybuddiesStructure from "../img/studybuddies-structure.png";

export default class GiveTake extends Component {
  constructor(props){
    super(props);
    this.projectmain = {
      title: "Study Buddies",
      type: "MERN stack project",
      skills: "MongoDB, Express, React, Node.js, Redux, Heroku",
      weblink: "https://mern-study-buddies.herokuapp.com/",
      githublink: "https://github.com/backy22/study-buddies",
      mainimg: studybuddiesMain 
    }
    this.overview = {
      text: "Study Buddies is the recent personal project where you can organize and find study groups. It's similar with Meetup. I applied the web development framework called 'MERN stack', which includes MongoDB(a document-based open source database), Express(a web application framework for Node.js), React(a JavaScript front-end library for building user interfaces), Node.js(JavaScript run-time environment that executes JavaScript code on a server). Besides, Bootstarp(CSS framework), Heroku(Cloud server) and Redux(JavaScript library to manage state) are applied.",
      img: studybuddiesStructure
    }
    this.projectproduct = {
      text: ["This application consists of these functions;", 
            <ul key="studybuddies">
              <li>Signin / login / logout</li>
              <li>Show the list of study groups / add new / edit / delete the group</li>
              <li>Join the group</li>
              <li>Invited to the group via email</li>
              <li>Show the list of study buddies</li>
            </ul>,
            ],
      livelink: "https://mern-study-buddies.herokuapp.com/",
      codelink: "https://github.com/backy22/study-buddies"
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
        <ProjectNav prevproject="" prevlink="" nextlink="givetake" nextproject="Give & Take App"/>
      </div>
    );
  }
}
