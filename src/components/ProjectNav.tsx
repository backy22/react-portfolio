import React from 'react';
import { Link } from "react-router";

interface ProjectNavProps {
  prevlink?: string;
  nextlink?: string;
  prevproject?: string;
  nextproject?: string;
}

const ProjectNav = ({ prevlink, nextlink, prevproject, nextproject }: ProjectNavProps) => {
  return (
    <div className="project-nav">
      <Link to={prevlink || ''} className={prevlink ? 'left-arrow' : 'disabled left-arrow'}>
        <span>{prevproject}</span>
        <i className="fas fa-chevron-left fa-2x"></i>
      </Link>
      <Link to={nextlink || ''} className={nextlink ? 'right-arrow' : 'disabled right-arrow'}>
        <i className="fas fa-chevron-right fa-2x"></i>
        <span>{nextproject}</span>
      </Link>
    </div>
  );
};

export default ProjectNav; 