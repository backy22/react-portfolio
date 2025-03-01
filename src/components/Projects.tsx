import React, { useEffect } from 'react';
import animalDetectionThumbnail from "../img/animal_result.png";
import weatherThumbnail from "../img/weather-thumbnail.jpeg";
import orgdesignThumbnail from "../img/orgdesign-thumbnail.png";
import jibseThumbnail from "../img/jibse-thumbnail.png";
import rooknrollThumbnail from "../img/rooknroll-thumbnail.png";
import webrtcGroupChatThumbnail from "../img/webrtc_group_chat.png";
import WOW from "wowjs";

interface ProjectData {
  thumbnail: string;
  title: string;
  weblink?: string;
  githublink?: string;
  type: string;
  moredetail?: string;
  skills: string;
}

interface ProjectProps {
  project: ProjectData;
}

interface WebLinkProps {
  project: ProjectData;
}

interface GithubLinkProps {
  project: ProjectData;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="project wow bounceInUp">
      <div className="project-thumbnail">
        <div className="thumbnail">
          <img src={project.thumbnail} alt="project thumbnail"/>
        </div>
        <p className="skills">{project.skills}</p>
      </div>
      <h3 className="project-title">
        <div>{project.title}</div>
        <div className="linkicons"> 
          <WebLink project={project} />
          <GithubLink project={project} />
        </div>
      </h3>
      <div>
        {project.type}
        {project.moredetail && <p><a href={project.moredetail} target="blank">&gt;&gt;More details</a></p>}
      </div>
    </div>
  );
}

const WebLink: React.FC<WebLinkProps> = ({ project }) => {
  if (project.weblink){
    return (
      <a href={project.weblink} target="blank">
        <svg className="linkicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.79 15.79"><defs></defs><title>Asset 2</title><path className="cls-1" d="M15.07,0H9.33a.72.72,0,1,0,0,1.44h4L6,8.82a.72.72,0,0,0,1,1l7.39-7.39v4a.72.72,0,1,0,1.43,0V.72A.72.72,0,0,0,15.07,0Z"/><path className="cls-1" d="M12.2,7.18a.72.72,0,0,0-.72.72v6.46h-10v-10H7.9a.72.72,0,0,0,0-1.44H.72A.72.72,0,0,0,0,3.59V15.07a.72.72,0,0,0,.72.72H12.2a.72.72,0,0,0,.72-.72V7.9A.72.72,0,0,0,12.2,7.18Z"/></svg>
      </a>
    );
  }
  return null;
}

const GithubLink: React.FC<GithubLinkProps> = ({ project }) => {
  if (project.githublink){
    return (
      <a href={project.githublink} target="blank">
        <svg className="linkicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.42 33.57"><defs></defs><title>Asset 19</title><path className="cls-1" d="M17.21,0a17.21,17.21,0,0,0-5.44,33.54c.86.16,1.13-.35,1.13-.81s0-1.55,0-3c-4.78,1-5.78-2.27-5.78-2.27A4.55,4.55,0,0,0,5.21,25c-1.56-1.07.12-1,.12-1A3.61,3.61,0,0,1,8,25.69a3.67,3.67,0,0,0,5,1.43,3.66,3.66,0,0,1,1.09-2.3c-3.82-.44-7.84-1.91-7.84-8.51A6.67,6.67,0,0,1,8,11.69a6.14,6.14,0,0,1,.17-4.55S9.62,6.68,12.9,8.9a16.3,16.3,0,0,1,8.62,0c3.29-2.22,4.73-1.76,4.73-1.76a6.14,6.14,0,0,1,.17,4.55,6.67,6.67,0,0,1,1.77,4.62c0,6.61-4,8.07-7.86,8.49A4.08,4.08,0,0,1,21.51,28v4.77c0,.46.28,1,1.15.8A17.21,17.21,0,0,0,17.21,0Z"/></svg>
      </a>
    );
  }
  return null;
}

const projects: ProjectData[] = [
  {
    thumbnail: animalDetectionThumbnail,
    title: "Animal Detection",
    weblink: "https://animal-detection.onrender.com/",
    githublink: "https://github.com/backy22/AnimalDetection",
    type: "This project is a simple animal detection app using YOLOv8 and OpenCV.",
    skills: "YOLOv8, OpenCV, Python, Flask, Render"
  },
  {
    thumbnail: weatherThumbnail,
    title: "Weather App",
    weblink: "https://master.d25q4j1ouiximk.amplifyapp.com/",
    type: "This project is a simple weather app using OpenWeatherMap API.",
    skills: "OpenWeatherMap API, HTML, CSS, JavaScript"
  },
  {
    thumbnail: orgdesignThumbnail,
    title: "OrgDesign",
    weblink: "https://org-design.vercel.app",
    type: "OrgDesign is a platform where any organizations can create a token and use it effectively.",
    moredetail: "https://drive.google.com/file/d/1duKjZee06MpD9VAXsZ6dpKk8twxoaCaN/view?usp=sharing",
    skills: "Firebase, Ethers.js, Openzeppelin, Solidity, Nextjs, Mui"
  },
  {
    thumbnail: jibseThumbnail,
    title: "Jibse",
    weblink: "https://jibse.vercel.app/",
    githublink: "https://github.com/backy22/Jibse",
    type: "Jibse is a dapp that helps tenants and owners make a worry-free lease contract without knowing each other.",
    moredetail: "https://devpost.com/software/jibse?ref_content=my-projects-tab&ref_feature=my_projects",
    skills: "Solidity, React, Ethers.js, Nextjs, Tailwind CSS"
  },
  {
    thumbnail: rooknrollThumbnail,
    title: "RooknRoll",
    weblink: "https://beta.rooknroll.com/",
    type: "Customized chess game where only pieces along with the rolled 3D dice can be moved. guest name: test or test1, password: password",
    skills: "JavaScript, ThreeJs, ExpressJs, MySQL, WebSocket"
  },
  {
    thumbnail: webrtcGroupChatThumbnail,
    title: "WebRTC group chat",
    weblink: "https://webrtc-group-chat-09u6.onrender.com/",
    githublink: "https://github.com/backy22/webrtc-group-chat",
    type: "This project is a realtime video chat platform where users can video chat, record, and text chat.",
    skills: "WebRTC, React, ExpressJs, SimplePeer, WebSocket"
  }
];

const Projects: React.FC = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  const projectList = () => {
    return projects.map((project, index) => {
      return <Project key={index} project={project} />;
    });
  }

  return (
    <section id="projects">
      <h1><span className="highlight">Projects</span></h1>
      <div className="projects-wrapper">
        {projectList()}
      </div>
    </section>
  );
}

export default Projects; 