import React from 'react';
import './Menu.scss';

function Menu() {
  return (
    <div className="menu">
       <div className="menu__items">
            <div className="menu__item">about</div>
            <div className="menu__item">portfolio</div>
            <div className="menu__item">labs</div>
            <div className="menu__item">contact</div>
       </div>
    </div>
  );
}

export default Menu;