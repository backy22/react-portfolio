import React, { Component } from 'react';

export default class PaperPrototyping extends Component {

  render() {
    return (
      <section className="paperprototyping">
        <h1>Paper Prototyping</h1>
        <p>This video show two versions of paper prototyping and did user testing. I found that the vertical scroll is much easier for the user than the horizontal scroll by user testing.</p>
        <div className="video demo">
          <iframe width="853" height="480" src="https://www.youtube.com/embed/mKBNDYzUN9M?&autoplay=1&rel=0&loop=1&playlist=mKBNDYzUN9M" frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </section>
    );
  }
}
