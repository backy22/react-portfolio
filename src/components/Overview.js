import React from 'react';

const OverviewImg = props => {
  if (props.img){
    return <img src={props.img} alt="overview image" />
  }else{
    return null;
  }
}

const Overview = (props) => {
  return (
    <section id="overview" className="overview">
      <h1><span className="highlight">Overview</span></h1>
      <p>{props.overview.text}</p>
      <OverviewImg img={props.overview.img} />
    </section>
  );
}

export default Overview;
