import React, { Component } from 'react';
import tsubakiPackage1 from "../img/tsubaki-package1.jpg";
import tsubakiPackage2 from "../img/tsubaki-package2.jpg";

export default class BrandingPackage extends Component {

  render() {
    return (
      <section className="branding-package">
        <h1>Branding Package</h1>
        <p>In terms of brand identity of the business card, envelope and letterhead, I made them simple but unique and consistent for each version.</p>
        <img src={tsubakiPackage1} />
        <img src={tsubakiPackage2} />
      </section>
    );
  }
}
