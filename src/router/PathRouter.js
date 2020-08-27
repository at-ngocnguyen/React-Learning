import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Clock from '../container/Clock';
import Color from '../components/color';
import Hobby from '../container/Hobby';
import AppRouter from './AppRouter'
import Pagination from '../container/Pagination';
import Page from '../page/Page';

const PathRouter = () => {
  return (
    <Router>
      <Switch>
        <AppRouter
          path="/clock"
          layout={Page}
          component={Clock} />
        <AppRouter
          path="/color"
          layout={Page}
          component={Color} />
        <AppRouter
          path="/hobby"
          layout={Page}
          component={Hobby} />
        <AppRouter
          path="/pagination"
          layout={Page}
          component={Pagination} />
      </Switch>
    </Router>

  );
};
// Ở đây vì muốn giữ Component Homepage xuất hiện xuyên suốt các page nên không để
// extra, nếu muốn chỉ render ra chỉ mình component mong muốn thì thêm vào
export default PathRouter;
