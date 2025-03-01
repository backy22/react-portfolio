import React, { useEffect } from 'react';
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
import rails from "../img/rails.svg";
import postgres from "../img/postgres.svg";
import mysql from "../img/mysql.svg";
import firebase from "../img/firebase.svg";
import mongodb from "../img/mongodb.svg";
import git from "../img/git.svg";
import WOW from "wowjs";

interface SkillData {
  icon: string;
  skillname: string;
}

interface SkillProps {
  skill: SkillData;
}

const Skill: React.FC<SkillProps> = ({ skill }) => (
  <div className="skill wow bounceIn">
    <img src={skill.icon} alt="skill icon"/>
    <div className="skill-name">{skill.skillname}</div>
  </div>
);

const skills: SkillData[] = [
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
  {icon: git, skillname: "Git"},
];

const Skills = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  const skillList = () => {
    return skills.map((skill, index) => (
      <Skill key={index} skill={skill} />
    ));
  };

  return (
    <section id="skills">
      <h1><span className="highlight">Skills + Tools</span></h1>
      <div className="skills-wrapper">
        {skillList()}    
      </div>
    </section>
  );
};

export default Skills; 