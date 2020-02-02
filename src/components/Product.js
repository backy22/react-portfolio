import React, { Component } from 'react';

export default class Product extends Component {

  render() {
    return (
      <section className="product">
      <h1>Product</h1>
      <div>
        {this.props.projectproduct.text}
      </div>
      <div className="product-buttons">
        <a href={this.props.projectproduct.livelink} target="blank"><button>VIEW LIVE</button></a>
        <a href={this.props.projectproduct.codelink} target="blank"><button>VIEW CODE</button></a>
      </div>
      </section>
    );
  }
}
