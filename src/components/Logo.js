import React, { Component } from 'react';
import tsubakiLogo from "../img/tsubaki-logo.png";

export default class Logo extends Component {

  render() {
    return (
      <section className="logo">
        <h1>Logo</h1>
        <p>First, I created the logo for the company. I chose one of the options in the second image after the ideation. Some options were associated with the meaning of "tsubaki," which is camellia in Japanese. Some of them represent programming. The reasons why I chose the final logo are scalability and simplicity. Also, it worked in black and white. After selecting the logo, I arranged the logo font. The first one uses Acme Gothic, which gives a clean, advanced and professional impression. The second one uses Active, which gives a poweful, creative and cheerful impression.</p>
        <img src={tsubakiLogo} />
      </section>
    );
  }
}
