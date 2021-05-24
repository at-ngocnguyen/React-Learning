import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "share/home/home";
import Clock from "container/Clock";
import Color from "components/color";
import Hobby from "container/Hobby";
import Pagination from "container/Pagination";
import Todo from "container/Todo";
import Product from "container/Product";
import Error404 from "share/404/404";
import Header from "share/header/header";
import Footer from "share/footer/footer";
import Login from "admin/Login";
import Order from "admin/Order";

const routing = [
  {
    path: "/",
    children: () => <Home />,
    exact: true,
  },
  {
    path: "/clock",
    children: () => <Clock />,
  },
  {
    path: "/color",
    children: () => <Color />,
  },
  {
    path: "/hobby",
    children: () => <Hobby />,
  },
  {
    path: "/pagination",
    children: () => <Pagination />,
  },
  {
    path: "/todo",
    children: () => <Todo />,
  },
  {
    path: "/product",
    children: () => <Product />,
  },
  {
    path: "/login",
    children: () => <Login />,
  },
  {
    path: "/order",
    children: () => <Order />,
  },
  {
    path: "*",
    children: () => <Error404 />,
  },
];

const Routing = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          {routing.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              children={item.children}
              exact={item.exact ? item.exact : false}
            />
          ))}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default Routing;
