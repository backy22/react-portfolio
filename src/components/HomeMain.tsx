import React from 'react';
import arrow from "../img/arrow.svg";

const HomeMain = () => {
  return (
    <section id="homemain" className="homemain">
      <p className="typing">
        <p className="hand">&#129306;</p>Hi, my name is <span className="logo">#AyaTsubakino</span>! I&apos;m a <span className="highlight">Full-Stack developer</span> passionate about <span className="highlight">learning new technologies</span> located in Toronto<p className="flag">🇨🇦</p>, born and raised in Japan<p className="flag">🇯🇵</p> Looking for exciting new opportunities to grow<p className="grow">&#127793;</p>
      </p> 
      <div className="arrow">
        <a href="#skills"><img src={arrow} alt="arrow" /></a>
      </div>
    </section>
  );
};

export default HomeMain;