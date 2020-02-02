import React, { Component } from 'react';
import profileImage from "../img/profile-image.png";

export default class About extends Component {

  render() {
    return (
      <section id="about">
        <h1>About me</h1>
        <div className="profile-wrapper">
          <div className="profile-image">
            <img src={profileImage} alt="profile"/>
          </div>
          <div className="profile-text">
            <p>
              <span>&#129306;</span>Hi, my name is Aya and I’m a front-end developer & designer in Toronto🇨🇦, born and raised in Japan🇯🇵
              <br />
              <br />
              I am focusing on the practice of UX/UI Design, Web Design, and Front End Development in the Multimedia Design and Development program at Humber College. Also, I have three years experience as a back-end developer💪
              <br />
              <br />
              I am passionate about solving problems and creating unique and functional websites&#128525;
              <br />
              <br />
              Please reach me at
              <br />
              <span className="email">aya.tsubakino@gmail.com</span>
            </p>
          </div>
        </div>
      </section>
    );
  }
}
