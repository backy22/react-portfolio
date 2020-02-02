import React, { Component } from 'react';
import github from "../img/github.svg";
import instagram from "../img/instagram.svg";
import linkedin from "../img/linkedin.svg";

export default class Footer extends Component {

  render() {
    return (
      <footer>
        <section>
        <h1>Let&apos;s Connect</h1>
        <div className="snslink">
          <a href="https://github.com/backy22" target="blank"><img src={github} alt="icon of github"/></a>
          <a href="https://www.instagram.com/ayatsubakino/" target="blank"><img src={instagram} alt="icon of instagram" /></a>
          <a href="https://www.linkedin.com/in/ayatsubakino/" target="blank"><img src={linkedin} alt="icon of linkedin" /></a>
        </div>
        </section>
        <div className="copyright">
          <small>Copyright 2020</small>
        </div>
      </footer>
    );
  }
}
