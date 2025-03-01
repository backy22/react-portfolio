import React from 'react';

const Mockup = (props) => {
  const imgList = () => {
    if (props.projectmockup.images) {
      return props.projectmockup.images.map(image => {
        return <img key={image} src={image} alt="mockup"/>;
      })
    }
    return null;
  }

  const youtubeList = () => {
    if (props.projectmockup.youtubelinks) {
      return props.projectmockup.youtubelinks.map(youtubelink => {
        return <div key={youtubelink} className="video demo">
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
      })
    }
    return null;
  }

  const mockupLive = () => {
    if (props.projectmockup.mockuplink) {
      return <div className="mockup-button">
        <a href={props.projectmockup.mockuplink}><button>VIEW LIVE</button></a>
      </div>
    }
    return null;
  }

  return (
    <section className="mockup">
      <h1><span className="highlight">Mockup</span></h1>
      <p>{props.projectmockup.text}</p>
      {mockupLive()}
      {imgList()}
      {youtubeList()}
    </section>
  );
}

export default Mockup;
