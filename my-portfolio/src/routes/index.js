import React from "react";
import Home from '../pages/home/home'
import {
  Switch,
  Route,
} from "react-router-dom";

/**
 * @description Routes list
 * @returns {object} the component
 */
const Routes = () => ( 
  <Switch>
      <Route exact path='/:section' component={Home} />
  </Switch>
);

export default Routes;