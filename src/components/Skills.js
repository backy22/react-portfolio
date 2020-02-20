import React, { Component } from 'react';
import html from "../img/html.svg";
import css from "../img/css.svg";
import js from "../img/js.svg";
import jquery from "../img/jquery.svg";
import react from "../img/react.svg";
import nodejs from "../img/nodejs.svg";
import bootstrap from "../img/bootstrap.svg";
import rails from "../img/rails.svg";
import postgres from "../img/postgres.svg";
import mysql from "../img/mysql.svg";
import wordpress from "../img/wordpress.svg";
import php from "../img/php.svg";
import git from "../img/git.svg";
import photoshop from "../img/photoshop.svg";
import aftereffect from "../img/aftereffect.svg";
import illustrator from "../img/illustrator.svg";
import xd from "../img/xd.svg";

const Skill = props => (
  <div className="skill">
    <img src={props.skill.icon} alt="skill icon"/>
    <div className="skill-name">{props.skill.skillname}</div>
  </div>
)

const skills = [
    {icon: react, skillname: "React"},
    {icon: nodejs, skillname: "Node.js"},
    {icon: js, skillname: "JavaScript"},
    {icon: jquery, skillname: "jQuery"},
    {icon: rails, skillname: "Ruby on Rails"},
    {icon: postgres, skillname: "PostgreSQL"},
    {icon: mysql, skillname: "MySQL"},
    {icon: html, skillname: "HTML"},
    {icon: css, skillname: "CSS"},
    {icon: bootstrap, skillname: "Bootstrap"},
    {icon: wordpress, skillname: "WordPress"},
    {icon: php, skillname: "PHP"},
    {icon: git, skillname: "Git"},
    {icon: photoshop, skillname: "Photoshop"},
    {icon: aftereffect, skillname: "After Effects"},
    {icon: illustrator, skillname: "Illustrator"},
    {icon: xd, skillname: "XD"}
  ];

export default class Skills extends Component {
  skillList() {
    return skills.map(skill => {
      return <Skill skill={skill} />;
    })
  }

  render() {
    return (
      <section id="skills">
        <h1>Skills + Tools</h1>
        <div className="skills-wrapper">
          {this.skillList()}    
        </div>
      </section>
    );
  }
}
