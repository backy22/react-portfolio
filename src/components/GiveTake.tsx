import React, { useEffect, ReactNode } from 'react';
import DetailMain from "./DetailMain";
import Overview from "./Overview";
import Mockup from "./Mockup";
import Product from "./Product";
import ProjectNav from "./ProjectNav";
import givetakeMain from "../img/givetake-main.png";
import givetakeMockup1 from "../img/givetake-mockup1.png";
import givetakeMockup2 from "../img/givetake-mockup2.png";

interface ProjectMain {
  title: string;
  type: string;
  skills: string;
  weblink: string;
  githublink: string;
  mainimg: string;
}

interface OverviewData {
  text: string;
}

interface ProjectMockup {
  text: string;
  mockuplink: string;
  images: string[];
}

interface ProjectProduct {
  text: ReactNode[];
  livelink: string;
  codelink: string;
}

const GiveTake = () => {
  const projectmain: ProjectMain = {
    title: "Give & Take App",
    type: "React project",
    skills: "React, Redux, Material-UI, Firebase, Sketch, Mockup",
    weblink: "https://givetake-pro.web.app",
    githublink: "https://github.com/backy22/givetake",
    mainimg: givetakeMain 
  };

  const overview: OverviewData = {
    text: "This is a personal project named 'give&take', which is the chatting app using react ×redux ×firebase. The concept of this application is similar with Craigslist, but this application will allow us to trade anything other than money. We are not motivated only by money, but also of the value the give and take of a relationship. I hope that this way of thinking will have an impact on our life style."
  };

  const projectmockup: ProjectMockup = {
    text: "I made the mockup using Sketch and Marvel. As the image below shows, the user can link to the user page, the topic page, the new topic page and the message list page after the login. You can check the clickable mockup from the link below",
    mockuplink: "",
    images: [givetakeMockup1, givetakeMockup2]
  };

  const projectproduct: ProjectProduct = {
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
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <DetailMain projectmain={projectmain}/>
      <Overview overview={overview} />
      <Mockup projectmockup={projectmockup} />
      <Product projectproduct={projectproduct}/>
      <ProjectNav prevproject="Study Buddies" prevlink="studybuddies" nextlink="projectscms" nextproject="My Projects CMS"/>
    </div>
  );
};

export default GiveTake; 