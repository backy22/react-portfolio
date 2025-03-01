import React from 'react';

const Product = (props) => {
  return (
    <section className="product">
      <h1><span className="highlight">Product</span></h1>
      <div>
        {props.projectproduct.text}
      </div>
      <div className="product-buttons">
        <a href={props.projectproduct.livelink} target="blank"><button>VIEW LIVE</button></a>
        <a href={props.projectproduct.codelink} target="blank"><button>VIEW CODE</button></a>
      </div>
    </section>
  );
}

export default Product;
