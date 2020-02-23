import React, { Component } from 'react';
import profileImage from "../img/profile-image.png";
import WOW from "wowjs";

export default class About extends Component {
  componentDidMount() {
		new WOW.WOW().init();
	}

  render() {
    return (
      <section id="about" className="wow bounceInLeft">
        <h1>About me</h1>
        <div className="profile-wrapper">
          <div className="profile-image">
            <img src={profileImage} alt="profile"/>
          </div>
          <div className="profile-text">
            <p>
              <span>&#129306;</span>Hi, my name is <span className="logo">#AyaTsubakino</span>! and I’m a Full-Stack developer passionate about design located in Toronto🇨🇦, born and raised in Japan🇯🇵
              <br />
              <br />
              I am focusing on the practice of Front End Development, Web Design, and UX/UI Design, Web Design in the Multimedia Design and Development program at Humber College. Also, I have three years experience as a back-end developer mainly using Ruby on Rails💪
              <br />
              <br />
              I am passionate about solving problems and creating unique and functional UI&#128525;
              <br />
              <br />
              Please reach me at
              <br />
              <a href="mailto:aya.tsubakino@gmail.com?subject=I%20want%20to%20hire%20Aya&body=Hi,%20Aya"><span className="email">aya.tsubakino@gmail.com</span>
</a>
            </p>
          </div>
        </div>
      </section>
    );
  }
}
