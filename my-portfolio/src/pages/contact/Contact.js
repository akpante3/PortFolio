import React from 'react';
import './Contact.scss'

function Contact() {
  return (
    <div className="contact">
      <div>
        <div className="contact__header"><img src={require('../../images/icons/contact.svg')} alt="hello" />Contact</div>
        <div className="contact__content"><a href="https://github.com/akpante3"><img src={require('../../images/icons/github.svg')} alt="hello" /></a></div>
        <div className="contact__content"><a href="mailto:nowhere@mozilla.org"><img src={require('../../images/icons/linkedin.svg')} alt="hello" /></a></div>
        <div className="contact__content"><a href="mailto:nowhere@mozilla.org"><img src={require('../../images/icons/gitlab.svg')} alt="hello" /></a></div>
        <div className="contact__content"><a href="mailto:nowhere@mozilla.org"><img src={require('../../images/icons/gmail.svg')} alt="hello" /></a></div>
      </div>
    </div>
  );
}

export default Contact;