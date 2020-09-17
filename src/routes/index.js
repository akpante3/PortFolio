import React from "react";
import Home from '../pages/home/home'
import NotFound from '../pages/404/404'
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

let link = 'about'
/**
 * @description Routes list
 * @returns {object} the component
 */
const Routes = () => ( 
  <Switch>
      {/* <Route path='/' component={page} />  */}
      <Redirect exact from="/" to="/about" />

      <Route name="about" path='/about' component={Home} />
      <Route name="portfolio" path='/portfolio' component={Home} />
      <Route name="my-offer" path='/my-offer' component={Home} />
      <Route name="contact" path='/contact' component={Home} />
      <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;