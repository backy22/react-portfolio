import React, { useEffect, ReactNode } from 'react';
import DetailMain from "./DetailMain";
import Overview from "./Overview";
import Wireframes from "./Wireframes";
import StyleGuide from "./StyleGuide";
import Mockup from "./Mockup";
import Product from "./Product";
import ProjectNav from "./ProjectNav";
import seanMain from "../img/sean-main.png";
import seanMockup from "../img/sean-mockup.png";

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

const Sean: React.FC = () => {
  const projectmain: ProjectMain = {
    title: "Sean Connery's website",
    type: "Redesign",
    skills: "Wireframe, Mockup, Illustrator, Photoshop, HTML, CSS, JavaScript",
    weblink: "https://backy22.github.io/sean-connery/",
    githublink: "https://github.com/backy22/sean-connery",
    mainimg: seanMain 
  };

  const overview: OverviewData = {
    text: "This project was redesigning Sean Connery's official site. I began by assessing the current website and completely rethought the design and the structure of the website. Next, I defined the purpose of the website. I want to introduce him because he has already retired and the existing website is a non-commercial site. I set keywords which are 'successful,' 'historic,' 'elegant,' 'formal' and 'timeless.' "
  };

  const projectmockup: ProjectMockup = {
    text: "Keeping consistency in every page was the most difficult point of the project, because I tried to use various techniques to achieve the goal. I decided to focus on the four columns layout with randomness and removed some content which was not important. As a result, I kept consistency as well as achieved the goal of the website.",
    mockuplink: "",
    images: [seanMockup]
  };

  const projectproduct: ProjectProduct = {
    text: ["In the front-end development, I made use of a Grid system."],
    livelink: "https://backy22.github.io/sean-connery/",
    codelink: "https://github.com/backy22/sean-connery"
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <DetailMain projectmain={projectmain} />
      <Overview overview={overview} />
      <Wireframes />
      <StyleGuide />
      <Mockup projectmockup={projectmockup} />
      <Product projectproduct={projectproduct} />
      <ProjectNav prevproject="My Projects CMS" prevlink="projectscms" nextlink="tsubaki" nextproject="Design Agent website" />
    </div>
  );
}

export default Sean; 