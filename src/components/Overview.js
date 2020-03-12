import React, { Component } from 'react';

export default class Overview extends Component {
  render() {
    return (
      <section id="overview" className="overview">
        <h1><span className="highlight">Overview</span></h1>
        <p>{this.props.overview}</p>
      </section>
    );
  }
}
