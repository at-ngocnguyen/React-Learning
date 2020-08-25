import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from '../page/HomePage';
import Clock from '../container/Clock';
import Color from '../components/color';
import Hobby from '../container/Hobby';
import Pagination from '../container/Pagination';

const PathRouter = () => {
  return (
    <Router>
      <Route path="/" component={HomePage} />
      <Route path="/hobby" component={Hobby} />
      <Route path="/pagination" component={Pagination} />
      <Route path="/clock" component={Clock} />
      <Route path="/magicbox" component={Color} />
    </Router>
  );
};
// Ở đây vì muốn giữ Component Homepage xuất hiện xuyên suốt các page nên không để
// extra, nếu muốn chỉ render ra chỉ mình component mong muốn thì thêm vào
export default PathRouter;
