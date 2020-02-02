import React, { Component } from 'react';
import arrow from "../img/arrow.svg";

export default class DetailMain extends Component {
  render() {
    return (
      <section className="detailmain">
        <div className="detailmain-flexbox">
          <div className="detailmain-box">
            <div className="detailmain-box-text">
              <h1>{this.props.projectmain.title}</h1>
              <p>{this.props.projectmain.type}</p>
              <div>
                <a href={this.props.projectmain.weblink}><button>VIEW LIVE</button></a>
                <a href={this.props.projectmain.githublink}><button>VIEW CODE</button></a>
              </div>
            </div>
          </div>
          <div className="detailmain-box">
            <div className="detailmain-box-image">
              <img src={this.props.projectmain.mainimg} alt="main" />
            </div>
          </div>
        </div>
        <div className="arrow">
          <a href="#overview"><img src={arrow} alt="arrow icon"/></a>
        </div>
      </section>
    );
  }
}
