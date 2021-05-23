import React from "react";
import { Link, useRouteMatch } from 'react-router-dom';

const ProductItem = (props) => {
  const { item } = props;
  let match = useRouteMatch();
  return (
    <Link
      key={item.id}
      className="list-group-item col-6 m-auto"
      to={`${match.url}/${item.id}`}
    >
      <img src={item.image} alt="" className="w-100" />
      <p>{item.title}</p>
      <p>{item.price}</p>
    </Link>
  );
};

export default ProductItem;
