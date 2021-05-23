import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from 'share/home/home';
import Clock from 'container/Clock';
import Color from 'components/color';
import Hobby from 'container/Hobby';
import { Pagination } from 'react-bootstrap';
import Todo from 'container/Todo';
import Product from 'container/Product';
import Error404 from 'share/404/404';
import Header from 'share/header/header';
import Footer from 'share/footer/footer';


function App() {
  return (
    <Router>
      <div className="container">
        <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/clock">
              <Clock />
            </Route>
            <Route path="/color">
              <Color />
            </Route>
            <Route path="/hobby">
              <Hobby />
            </Route>
            <Route path="/pagination">
              <Pagination />
            </Route>
            <Route path="/todo">
              <Todo />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
            <Route path="">
              <Error404 />
            </Route>
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
