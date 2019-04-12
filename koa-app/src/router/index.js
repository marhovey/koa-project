import React from 'react';
import { Redirect } from 'react-router';
import { HashRouter, Route } from 'react-router-dom';
import Index from '../pages/index/';
import Article from '../pages/article/';
const routes = (
  <HashRouter>
    <Route exact path="/" render={() => (
      <Redirect to="/index"/>
    )}/>
    <Route path="/index" component={Index} />
    <Route path="/detail" component={Article}/>
  </HashRouter>
)

export default routes