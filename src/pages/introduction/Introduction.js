import React from 'react';
import './Introduction.scss';
import {
  Link
} from "react-router-dom";

function Introduction() {
  return (
    <div className="introduction">
      <div>
        <div id="name-intro">Hello, I am <span className="highlight">Victor Obije</span></div>
        <div id="profession">I'm a Full-Stack Software Engineer <img src={require('../../images/icons/nerd.png') } alt="nerd" /></div>
        <Link to={'/contact'}><button className="btn btn--md introduction__button">contact</button></Link>
      </div>
    </div>
  );
}

export default Introduction;