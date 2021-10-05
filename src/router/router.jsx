import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Index from '../pages/Index/Index';

// Containers

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route>
        <Redirect to={'/'} />
      </Route>
    </Switch>
  </Router>
);

export default AppRouter;
