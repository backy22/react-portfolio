import React from 'react';

interface OverviewImgProps {
  img?: string;
}

interface OverviewData {
  text: string;
  img?: string;
}

interface OverviewProps {
  overview: OverviewData;
}

const OverviewImg = ({ img }: OverviewImgProps) => {
  if (img) {
    return <img src={img} alt="overview image" />;
  }
  return null;
};

const Overview = ({ overview }: OverviewProps) => {
  return (
    <section id="overview" className="overview">
      <h1><span className="highlight">Overview</span></h1>
      <p>{overview.text}</p>
      <OverviewImg img={overview.img} />
    </section>
  );
};

export default Overview; 