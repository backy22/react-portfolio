import React from 'react';
import { Link } from "react-router-dom";

const ProjectNav = (props) => {
  return (
    <div className="project-nav">
      <Link to={props.prevlink} className={props.prevlink ? 'left-arrow' : 'disabled left-arrow'}>
        <span>{props.prevproject}</span>
        <i className="fas fa-chevron-left fa-2x"></i>
      </Link>
      <Link to={props.nextlink} className={props.nextlink ? 'right-arrow' : 'disabled right-arrow'}>
        <i className="fas fa-chevron-right fa-2x"></i>
        <span>{props.nextproject}</span>
      </Link>
    </div>
  );
}

export default ProjectNav;
