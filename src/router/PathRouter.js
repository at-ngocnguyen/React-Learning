import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Clock from "../container/Clock";
import Color from "../components/color";
import Hobby from "../container/Hobby";
import AppRouter from "./AppRouter";
import Pagination from "../container/Pagination";
import Page from "../page/Page";
import Todo from "../container/Todo";
import Home from "../share/home/home";
import Error404 from "../share/404/404";
import Product from "container/Product";

const PathRouter = () => {
  return (
    <Router>
      <Switch>
        <AppRouter path="/" exact layout={Page} component={Home} />
        <AppRouter path="/clock" layout={Page} component={Clock} />
        <AppRouter path="/color" layout={Page} component={Color} />
        <AppRouter path="/hobby" layout={Page} component={Hobby} />
        <AppRouter path="/pagination" layout={Page} component={Pagination} />
        <AppRouter path="/todo" layout={Page} component={Todo} />
        <AppRouter path="/product" layout={Page} component={Product} />
        <AppRouter layout={Page} component={Error404} />
      </Switch>
    </Router>
  );
};
// Ở đây vì muốn giữ Component Homepage xuất hiện xuyên suốt các page nên không để
// exact, nếu muốn chỉ render ra chỉ mình component mong muốn thì thêm vào
export default PathRouter;
