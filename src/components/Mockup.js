import React, { Component } from 'react';

export default class Mockup extends Component {
  imgList(){
    if (this.props.projectmockup.images){
      return this.props.projectmockup.images.map(image => {
        return <img key={image} src={image} alt="mockup"/>;
      })
    }else{
      return null
    }
  }

  youtubeList(){
    if (this.props.projectmockup.youtubelinks){
      return this.props.projectmockup.youtubelinks.map(youtubelink => {
        return <div className="video demo"><iframe width="853" height="480" src={"https://www.youtube.com/embed/" + youtubelink + "?&autoplay=1&rel=0&loop=1&playlist=" + youtubelink} frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="mockupvideo"></iframe></div>
      })
    }else{
      return null
    }
  }

  mockupLive() {
    if (this.props.projectmockup.mockuplink){
      return <div className="mockup-button"><a href={this.props.projectmockup.mockuplink} ><button>VIEW LIVE</button></a></div>
    }else{
      return null
    }
  }

  render() {
    return (
      <section className="mockup">
        <h1><span className="highlight">Mockup</span></h1>
        <p>{this.props.projectmockup.text}</p>
        {this.mockupLive()}
        {this.imgList()}
        {this.youtubeList()}
      </section>
    );
  }
}
