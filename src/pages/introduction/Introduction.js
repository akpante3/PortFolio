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
        <div id="profession">I'm a Full-Stack Software Engineer( Front-end ) <img src={require('../../images/nerd.png') } alt="nerd" /></div>
        <a href="https://www.linkedin.com/in/victor-obije-a78003187/"><button className="btn btn--md introduction__button">contact</button></a>
      </div>
    </div>
  );
}

export default Introduction;