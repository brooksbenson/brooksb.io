import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Main from '../components/Main';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
