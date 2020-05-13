import React from "react";
import Home from '../pages/home/home'
import NotFound from '../pages/404/404'
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

/**
 * @description Routes list
 * @returns {object} the component
 */
const Routes = () => ( 
  <Switch>
      <Route name="home" path='/:section' component={Home} />
      <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;