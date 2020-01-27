import React, { Component } from 'react';
import arrow from "../img/arrow.svg";

export default class HomeMain extends Component {

  render() {
    return (
      <section id="homemain" className="homemain">
        <p className="typing">
         &#129306;Hi, my name is Aya! I&apos;m a front-end developer & designer in Toronto🇨🇦, born and raised in Japan🇯🇵
        </p>
        <div className="arrow">
          <a href="#skills"><img src={arrow} /></a>
        </div>
      </section>
    );
  }
}
