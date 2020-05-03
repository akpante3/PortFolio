import React from 'react';
import './Introduction.scss';

function Introduction() {
  return (
    <div className="introduction">
      <div>
        <div id="name-intro">Hello, I am <span className="highlight">Victor Obije 😀</span></div>
        <div id="profession">I'm a Full-Stack Software Engineer 🤓</div>
        {/* I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. All of my work is produced locally from Moscow, Idaho. What would you do if you had a software expert available at your fingertips? */}
        <button id="introduction__button">View my work</button>
      </div>
    </div>
  );
}

export default Introduction;