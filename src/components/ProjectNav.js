import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class ProjectNav extends Component {
  render() {
    return (
      <div className="project-nav">
        <Link to={this.props.prevlink} className={this.props.prevlink ? '' : 'disabled'}><i className="fas fa-chevron-left fa-2x"></i></Link>
        <Link to={this.props.nextlink} className={this.props.nextlink ? '' : 'disabled'}><i className="fas fa-chevron-right fa-2x"></i></Link>
      </div>
    );
  }
}
