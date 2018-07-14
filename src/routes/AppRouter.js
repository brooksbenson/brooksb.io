import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import ProjectPage from '../components/ProjectPage';
import ContactPage from '../components/ContactPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/projects" />} />
        <Route path="/projects" component={ProjectPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
