import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "share/header/header";
import Footer from "share/footer/footer";
import { routing } from "Routing/Routing";

const PathRouter = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          {routing.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              component={item.component}
              exact={!!item.exact}
            />
          ))}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default PathRouter;
