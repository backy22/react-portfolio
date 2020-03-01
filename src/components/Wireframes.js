import React, { Component } from 'react';
import seanWireframe from "../img/sean-wireframe.jpg";

export default class Wireframes extends Component {
  render() {
    return (
      <section className="wireframes">
        <h1>Wireframes</h1>
        <p>The biggest feature of my design is the layout of images. The layout that each piece of image finishes at a different point, makes users scroll through the pages. Black, white, grey and gold match the keywords of the website.</p>
        <img src={seanWireframe} alt="wireframe images of sean website"/>
      </section>
    );
  }
}
