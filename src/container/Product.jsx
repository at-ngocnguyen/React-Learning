import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Product = () => {
  const [product, setProduct] = useState([])
  useEffect(() => {
    async function getProduct() {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const resJson = await res.json();
        setProduct(resJson);
        console.log(resJson);
      } catch (error) {
        console.log('Error', error);
      }
    }
    getProduct();
  },[])
  return (
    <div>
      {product.map((item) => (
        <div key={item.id}>
          <img src={item.image} />
          <p>{item.title}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;