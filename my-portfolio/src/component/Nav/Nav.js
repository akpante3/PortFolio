import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <div className="nav">
      <div className="nav__items"> 
        <div className="nav__menu-button">
            <svg viewBox="0 0 100 80" width="40" height="20" fill="#aeaeae">
              <rect width="100" height="10"></rect>
              <rect y="30" width="100" height="10"></rect>
              <rect y="60" width="100" height="10"></rect>
            </svg>
        </div>
      </div>
    </div>
  );
}

export default Nav;