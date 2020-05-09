import React from 'react';
import './Introduction.scss';

function Introduction() {
  return (
    <div className="introduction">
      <div>
        <div id="name-intro">Hello, I am <span className="highlight">Victor Obije</span></div>
        <div id="profession">I'm a Full-Stack Software Engineer <img src={require('../../images/icons/nerd.svg') } /></div>
        <button id="introduction__button">View my work</button>
      </div>
    </div>
  );
}

export default Introduction;