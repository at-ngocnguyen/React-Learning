import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = props => {
  let { productId } = useParams();
  return <h3>Requested product ID: {productId}</h3>;
};

export default ProductDetail;
