import React from 'react';

interface ProjectMockup {
  text: string;
  mockuplink?: string;
  images?: string[];
  youtubelinks?: string[];
}

interface MockupProps {
  projectmockup: ProjectMockup;
}

const Mockup: React.FC<MockupProps> = ({ projectmockup }) => {
  const imgList = () => {
    if (projectmockup.images) {
      return projectmockup.images.map(image => {
        return <img key={image} src={image} alt="mockup"/>;
      });
    }
    return null;
  }

  const youtubeList = () => {
    if (projectmockup.youtubelinks) {
      return projectmockup.youtubelinks.map(youtubelink => {
        return (
          <div key={youtubelink} className="video demo">
            <iframe 
              width="853" 
              height="480" 
              src={`https://www.youtube.com/embed/${youtubelink}?&autoplay=1&rel=0&loop=1&playlist=${youtubelink}`}
              frameBorder="0" 
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen 
              title="mockupvideo">
            </iframe>
          </div>
        );
      });
    }
    return null;
  }

  const mockupLive = () => {
    if (projectmockup.mockuplink) {
      return (
        <div className="mockup-button">
          <a href={projectmockup.mockuplink}><button>VIEW LIVE</button></a>
        </div>
      );
    }
    return null;
  }

  return (
    <section className="mockup">
      <h1><span className="highlight">Mockup</span></h1>
      <p>{projectmockup.text}</p>
      {mockupLive()}
      {imgList()}
      {youtubeList()}
    </section>
  );
}

export default Mockup; 