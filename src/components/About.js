import React, { Component } from 'react';
import profileImage from "../img/profile-image.jpeg";
import WOW from "wowjs";
import resume from '../img/Resume_AyaTsubakino.pdf';

export default class About extends Component {
  componentDidMount() {
		new WOW.WOW().init();
	}

  render() {
    return (
      <section id="about" className="wow bounceInLeft">
        <h1><span className="highlight">About me</span></h1>
        <div className="profile-wrapper">
          <div className="profile-image">
            <img src={profileImage} alt="profile"/>
          </div>
          <div className="profile-text">
            <p>
              <span>&#129306;</span>Hi, my name is <span className="logo">#AyaTsubakino</span>! I’m a Full-Stack developer passionate about larning new technologies located in Toronto🇨🇦, born and raised in Japan🇯🇵
              <br />
              <br />
              I'm working for a Canadian company for 2 years mainly developing React-based Web applications for the clients. Also, I have 2 years experience as a back-end developer mainly using Ruby on Rails in the Japanese company which provides video on demand platform💪
              <br />
              <br />
              I am <span className="highlight">goal-oriented</span>, good at <span className="highlight">adapting to new environment</span>, and passionate about creating <span className="highlight">unique and functional web application</span>&#128525;
              <br />
              <br />
              Please reach me at
              <br />
              <a href="mailto:aya.tsubakino@gmail.com?subject=I%20want%20to%20hire%20Aya&body=Hi,%20Aya"><span className="email">aya.tsubakino@gmail.com</span>
</a>
            </p>
            <div className="resume-button">
              <a href={resume} target="blank"><button>VIEW RESUME</button></a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
