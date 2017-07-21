import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Resume from './routes/Resume'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
     	<Route path='/i' component={ IndexPage } />
      <Route path='/' component={ Resume } />
    </Router>
  );
}

export default RouterConfig;
