import React, { Component } from 'react';
import seanStyleGuide from "../img/sean-styleguide.jpg";

export default class StyleGuide extends Component {

  render() {
    return (
      <section className="styleguide">
        <h1><span className="highlight">Style Guide</span></h1>
        <p>To achieve the mood of "successful," "historic," "elegant," "formal" and "timeless", I chose black color as background and gold as highlight color. In terms of the fonts, Baskerville is the font which represents historic and elegance. And as Gill Sans is easy to read,  I decided to use it as the body text.</p>
        <img src={seanStyleGuide} alt="style guide of sean website" />
      </section>
    );
  }
}
