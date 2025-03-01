import React, { ReactNode } from 'react';

interface ProjectProduct {
  text: ReactNode[];
  livelink: string;
  codelink: string;
}

interface ProductProps {
  projectproduct: ProjectProduct;
}

const Product: React.FC<ProductProps> = ({ projectproduct }) => {
  return (
    <section className="product">
      <h1><span className="highlight">Product</span></h1>
      <div>
        {projectproduct.text}
      </div>
      <div className="product-buttons">
        <a href={projectproduct.livelink} target="blank"><button>VIEW LIVE</button></a>
        <a href={projectproduct.codelink} target="blank"><button>VIEW CODE</button></a>
      </div>
    </section>
  );
}

export default Product; 