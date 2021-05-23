import ProductDetail from "components/Product/ProductDetail";
import ProductList from "components/Product/ProductList";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  BrowserRouter as Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState([]);
  let match = useRouteMatch();
  useEffect(() => {
    async function getProduct() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const resJson = await res.json();
        setProduct(resJson);
      } catch (error) {
        console.log("Error", error);
      }
    }
    getProduct();
    return () => {
      setProduct([]);
    };
  }, []);
  return (
    <Switch>
      <Route path={`${match.path}/:productId`}>
        <ProductDetail />
      </Route>
      <Route path={`${match.path}`} exact>
        <ProductList product={product} />
      </Route>
    </Switch>
  );
};

export default Product;
