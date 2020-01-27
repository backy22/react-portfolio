import React, { Component } from 'react';
import arrow from "../img/arrow.svg";

export default class DetailMain extends Component {
  render() {
    return (
      <section className="detailmain">
        <div className="detailmain-flexbox">
          <div className="detailmain-box">
            <h1>{this.props.projectmain.title}</h1>
            <p>{this.props.projectmain.type}</p>
            <div>
              <a href={this.props.projectmain.weblink}><button>VIEW LIVE</button></a>
              <a href={this.props.projectmain.githublink}><button>VIEW CODE</button></a>
            </div>
          </div>
          <div className="detailmain-box">
            <img src={this.props.projectmain.mainimg} />
          </div>
        </div>
        <div className="arrow">
          <a href="#overview"><img src={arrow} /></a>
        </div>
      </section>
    );
  }
}
