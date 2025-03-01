import React, { useEffect } from 'react';
import arrow from "../img/arrow.svg";
import WOW from "wowjs";

const DetailMain = (props) => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <section className="detailmain">
      <div className="detailmain-flexbox">
        <div className="detailmain-box">
          <div className="detailmain-box-text">
            <h1>{props.projectmain.title}</h1>
            <p>{props.projectmain.type}</p>
            <div>
              <a href={props.projectmain.weblink} target='blank'><button>VIEW LIVE</button></a>
              <a href={props.projectmain.githublink} target='blank'><button>VIEW CODE</button></a>
            </div>
          </div>
        </div>
        <div className="detailmain-box">
          <div className="detailmain-box-image wow fadeInRight">
            <img src={props.projectmain.mainimg} alt="main" />
          </div>
        </div>
      </div>
      <div className="arrow">
        <a href="#overview"><img src={arrow} alt="arrow icon"/></a>
      </div>
    </section>
  );
}

export default DetailMain;
