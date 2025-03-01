import React, { useEffect } from 'react';
import DetailMain from "./DetailMain";
import Overview from "./Overview";
import Logo from "./Logo";
import BrandingPackage from "./BrandingPackage";
import Moodboard from "./Moodboard";
import PaperPrototyping from "./PaperPrototyping";
import Mockup from "./Mockup";
import ProjectNav from "./ProjectNav";
import tsubakiMain from "../img/tsubaki-main.png";

const Tsubaki = () => {
  const projectmain = {
    title: "Design Agent website",
    type: "Responsive design",
    skills: "Moodboard, Paper Prototyping, Mockup, Photoshop, Illustrator, XD",
    weblink: "https://ayatsubakino.com/webd100/finalassignment/",
    mainimg: tsubakiMain 
  };

  const overview = {
    text: 'This project included creating a logo, branding identity and website for my fictional company, called "tsubaki." This company serves web design and web development.'
  };

  const projectmockup = {
    text: "Using a lot of yellow makes the website look cheerful along with active font. I made high fidelity mock-ups for mobile and desktop websites. ",
    mockuplink: "",
    youtubelinks: ['WGBAfsfIAiY','5JyUjQvLiK8']
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <DetailMain projectmain={projectmain} />
      <Overview overview={overview} />
      <Logo />
      <BrandingPackage />
      <Moodboard />
      <PaperPrototyping />
      <Mockup projectmockup={projectmockup} />
      <ProjectNav prevproject="Sean Connery's website" prevlink="/sean" nextlink=""/>
    </div>
  );
}

export default Tsubaki;
