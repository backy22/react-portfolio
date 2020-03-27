import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class ProjectNav extends Component {
  render() {
    return (
      <div className="project-nav">
        <Link to={this.props.prevlink} className={this.props.prevlink ? 'left-arrow' : 'disabled left-arrow'}>
          <span>{this.props.prevproject}</span>
          <i className="fas fa-chevron-left fa-2x"></i>
        </Link>
        <Link to={this.props.nextlink} className={this.props.nextlink ? 'right-arrow' : 'disabled right-arrow'}>
          <i className="fas fa-chevron-right fa-2x"></i>
          <span>{this.props.nextproject}</span>
        </Link>
      </div>
    );
  }
}
