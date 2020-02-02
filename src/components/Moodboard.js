import React, { Component } from 'react';
import tsubakiMoodboard1 from "../img/tsubaki-moodboard1.jpg";
import tsubakiMoodboard2 from "../img/tsubaki-moodboard2.jpg";

export default class Moodboard extends Component {

  render() {
    return (
      <section className="moodboard">
        <h1>Moodboard</h1>
        <p>I created two versions of the moodboard. The keywords of the first one are “clean”, “advanced”, “trustworthy”, and “professional.” Those of the second one are "powerful," "creative," "unique," "cheerful," and "fashionable." At the end, I chose the second moodboard because I am very satisfied with the combination of colours and fonts. </p>
        <img src={tsubakiMoodboard1} alt="moodboard for logo type1"/>
        <img src={tsubakiMoodboard2} alt="moodboard for logo type2"/>
      </section>
    );
  }
}
