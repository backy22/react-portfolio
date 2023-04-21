import React, { Component } from 'react';
import html from "../img/html.svg";
import css from "../img/css.svg";
import sass from "../img/sass.svg";
import js from "../img/js.svg";
import ts from "../img/ts.svg";
import cypress from "../img/cypress.svg";
import python from "../img/python.svg";
import jquery from "../img/jquery.svg";
import react from "../img/react.svg";
import vuejs from "../img/vuejs.svg";
import nodejs from "../img/nodejs.svg";
// import bootstrap from "../img/bootstrap.svg";
import rails from "../img/rails.svg";
import postgres from "../img/postgres.svg";
import mysql from "../img/mysql.svg";
import firebase from "../img/firebase.svg";
import mongodb from "../img/mongodb.svg";
// import wordpress from "../img/wordpress.svg";
// import php from "../img/php.svg";
import git from "../img/git.svg";
// import photoshop from "../img/photoshop.svg";
// import aftereffect from "../img/aftereffect.svg";
// import illustrator from "../img/illustrator.svg";
// import xd from "../img/xd.svg";
import WOW from "wowjs";

const Skill = props => (
  <div className="skill wow bounceIn">
    <img src={props.skill.icon} alt="skill icon"/>
    <div className="skill-name">{props.skill.skillname}</div>
  </div>
)

const skills = [
    {icon: react, skillname: "React"},
    {icon: vuejs, skillname: "Vue.js"},
    {icon: nodejs, skillname: "Node.js"},
    {icon: ts, skillname: "TypeScript"},
    {icon: js, skillname: "JavaScript"},
    {icon: cypress, skillname: "Cypress"},
    {icon: jquery, skillname: "jQuery"},
    {icon: rails, skillname: "Ruby on Rails"},
    {icon: python, skillname: "Python"},
    {icon: postgres, skillname: "PostgreSQL"},
    {icon: mysql, skillname: "MySQL"},
    {icon: firebase, skillname: "Firebase"},
    {icon: mongodb, skillname: "MongoDB"},
    {icon: html, skillname: "HTML"},
    {icon: css, skillname: "CSS"},
    {icon: sass, skillname: "Sass"},
    // {icon: bootstrap, skillname: "Bootstrap"},
    // {icon: wordpress, skillname: "WordPress"},
    // {icon: php, skillname: "PHP"},
    {icon: git, skillname: "Git"},
    // {icon: illustrator, skillname: "Illustrator"},
    // {icon: xd, skillname: "XD"},
    // {icon: photoshop, skillname: "Photoshop"},
    // {icon: aftereffect, skillname: "After Effects"}
  ];

export default class Skills extends Component {
  componentDidMount() {
		new WOW.WOW().init();
	}

  skillList() {
    return skills.map(skill => {
      return <Skill skill={skill} />;
    })
  }

  render() {
    return (
      <section id="skills">
        <h1><span className="highlight">Skills + Tools</span></h1>
        <div className="skills-wrapper">
          {this.skillList()}    
        </div>
      </section>
    );
  }
}
