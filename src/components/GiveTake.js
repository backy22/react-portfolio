import React, { Component } from 'react';
import DetailMain from "./DetailMain";
import Overview from "./Overview";
import Mockup from "./Mockup";
import Product from "./Product";
import givetakeMain from "../img/givetake-main.png";
import givetakeMockup1 from "../img/givetake-mockup1.png";
import givetakeMockup2 from "../img/givetake-mockup2.png";

export default class GiveTake extends Component {
  constructor(props){
    super(props);
    this.projectmain = {
      title: "Give & Take App",
      type: "React project",
      skills: "Sketch, Mockup, React, Redux, Material-UI, Firebase",
      weblink: "https://givetake-pro.web.app",
      githublink: "https://github.com/backy22/givetake",
      mainimg: givetakeMain 
    }
    this.overview = "This is a personal project named 'give&take', which is the chatting app using react ×redux ×firebase. The concept of this application is similar with Craigslist, but this application will allow us to trade anything other than money. We are not motivated only by money, but also of the value the give and take of a relationship. I hope that this way of thinking will have an impact on our life style."
    this.projectmockup = {
      text: "I made the mockup using Sketch and Marvel. As the image below shows, the user can link to the user page, the topic page, the new topic page and the message list page after the login. You can check the clickable mockup from the link below",
      mockuplink: "",
      images: [givetakeMockup1, givetakeMockup2]
    }
    this.projectproduct = {
      text: ["This application consists of these functions;", 
            <ul key="givetake">
              <li>Signin / login / logout</li>
              <li>Show user page</li>
              <li>Edit the name and profile of the user</li>
              <li>Post / edit a topic</li>
              <li>Show topic list</li>
              <li>Post comment</li>
            </ul>,
            "I am using Hosting, Authentication, and Cloud Firestore services in Firebase. I am using Material-UI as a design framework."],
      livelink: "https://givetake-pro.web.app",
      codelink: "https://github.com/backy22/givetake"
    }
  }

  render(){
    return (
      <div className="container">
        <DetailMain projectmain={this.projectmain}/>
        <Overview overview={this.overview} />
        <Mockup projectmockup={this.projectmockup} />
        <Product projectproduct={this.projectproduct}/>
      </div>
    );
  }
}
