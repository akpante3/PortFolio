import React from 'react';
import {
    Link
  } from "react-router-dom";
import './404.scss'
import '../../App.scss';

const NotFound = () =>
  (<div className="not-found">
    <h3>404 page not found</h3>
    <p>We are sorry but the page you are looking for does not exist.</p>
    <button className="btn btn--md"><Link to="/about">Home</Link></button>
  </div>)

export default NotFound;