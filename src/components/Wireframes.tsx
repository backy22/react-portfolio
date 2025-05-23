import React from 'react';
import seanWireframe from "../img/sean-wireframe.jpg";

const Wireframes: React.FC = () => {
  return (
    <section className="wireframes">
      <h1><span className="highlight">Wireframes</span></h1>
      <p>The biggest feature of my design is the layout of images. The layout that each piece of image finishes at a different point, makes users scroll through the pages. Black, white, grey and gold match the keywords of the website.</p>
      <img src={seanWireframe} alt="wireframe images of sean website"/>
    </section>
  );
};

export default Wireframes; 