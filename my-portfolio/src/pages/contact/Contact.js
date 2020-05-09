import React from 'react';


function Contact() {
  return (
    <div className="contact">
      <div>
        <div>Contact</div>
        <div><a href="https://github.com/akpante3"><img src={require('../../images/icons/github.svg')} alt="hello" /></a></div>
        <div><a href="mailto:nowhere@mozilla.org"><img src={require('../../images/icons/linkedin.svg')} alt="hello" /></a></div>
        <div><a href="mailto:nowhere@mozilla.org"><img src={require('../../images/icons/gitlab.svg')} alt="hello" /></a></div>
        <div><a href="mailto:nowhere@mozilla.org"><img src={require('../../images/icons/gmail.svg')} alt="hello" /></a></div>
      </div>
    </div>
  );
}

export default Contact;