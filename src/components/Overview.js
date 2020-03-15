import React, { Component } from 'react';

const OverviewImg = props => {
  if (props.img){
    return <img src={props.img} alt="overview image" />
  }else{
    return null;
  }
}

export default class Overview extends Component {
  render() {
    return (
      <section id="overview" className="overview">
        <h1><span className="highlight">Overview</span></h1>
        <p>{this.props.overview.text}</p>
        <OverviewImg img={this.props.overview.img} />
      </section>
    );
  }
}
