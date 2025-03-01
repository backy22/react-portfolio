import React, { useEffect } from 'react';
import profileImage from "../img/profile-image.jpeg";
import WOW from "wowjs";
import resume from '../img/Resume_AyaTsubakino.pdf';

const About = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <section id="about" className="wow bounceInLeft">
      <h1><span className="highlight">About me</span></h1>
      <div className="profile-wrapper">
        <div className="profile-image">
          <img src={profileImage} alt="profile"/>
        </div>
        <div className="profile-text">
          <p>
            <span>&#129306;</span>Hi, my name is Aya! I'm a Full-Stack developer passionate about learning new technologies located in Toronto🇨🇦, born and raised in Japan🇯🇵
            <br />
            <br />
            I've been working for multiple clients in Canada and Japan for 5 years including React-based Web applications, npm library, and Rails-based video on demand platform💪
            <br />
            <br />
            I am <span className="highlight">goal-oriented</span>, good at <span className="highlight">adapting to new environment</span>, and love <span className="highlight">coding and tech industry</span>&#128525;
            <br />
            <br />
            Please reach me at
            <br />
            <a href="mailto:aya.tsubakino@gmail.com?subject=I%20want%20to%20hire%20Aya&body=Hi,%20Aya"><span className="email">aya.tsubakino@gmail.com</span></a>
          </p>
          <div className="resume-button">
            <a href={resume} target="blank"><button>VIEW RESUME</button></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
