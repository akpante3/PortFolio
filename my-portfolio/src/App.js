import React from 'react';
import Routes from './routes'
import './App.scss'
import {
  BrowserRouter as Router,
} from "react-router-dom";

/**
 * @description Root component
 * @returns {object} the component
 */
const App = () => {
  return (
    <Router >
      <Routes />
    </Router>
  );
}


export default App;
