import React from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  const { product } = props;

  return (
    <ul className="list-group row">
      {product.map((item, index) => (
        <ProductItem item={item} key={index}/>
      ))}
    </ul>
  );
};

export default ProductList;
