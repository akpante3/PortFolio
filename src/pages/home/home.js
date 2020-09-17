import React, { useState, useEffect } from 'react';
import {
  useParams, useHistory, useLocation
} from "react-router-dom";
import AwesomeSlider from 'react-awesome-slider';
import Indroduction from '../introduction/Introduction';
import MyOffer from '../skills/MyOffer';
import Portfolio from '../portfolio/Portfolio';
import Menu from '../menu/Menu';
import Contact from '../contact/Contact.js';
import { ReactComponent as Moon } from '../../images/icons/moon.svg';
import { ReactComponent as Sun } from '../../images/icons/sun.svg';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
import '../../App.scss';

const list = [
  <Indroduction />,
  <Portfolio />,
  <MyOffer />,
  <Contact />
]

const templates = list.map((data, index) =>
   <div key={index} > {data}</div>
);


const  App = () => {
  let history = useHistory()
  let location = useLocation();
  let { section } = useParams();
  const [showMenu, setshowMenu] = useState(false);
  const [menuClass, setMenuClass] = useState('');
  const [isDay, setIsDay] = useState(true);
  const [selectedTemplate, setselectedTemplate] = useState(null);
   

 
  const toggleMenu = () => {
    setshowMenu(!showMenu)
    showMenu ? setMenuClass('menu--close') : setMenuClass('menu--open')
  }

  const toggleTheme = () => {
    setIsDay(!isDay)
  }

  const selectedTemplates = (e) => {
    const nextIndex = e ? e.nextIndex : location.pathname


    if ( nextIndex === 0 || nextIndex === '/about') {
		  history.push('/about')
      setselectedTemplate(0)
     } else if ( nextIndex === 1 || nextIndex === '/portfolio') {
      history.push('/portfolio')
      setselectedTemplate(1)
     } else if ( nextIndex === 2 || nextIndex === '/my-offer') {
      history.push('/my-offer')
      setselectedTemplate(2)
     } else if ( nextIndex === 3 || nextIndex === '/contact') {
      history.push('/contact')
      setselectedTemplate(3)
     } else {
      history.push('/about')
     }
  }
  useEffect(() => {
    selectedTemplates ()
    // eslint-disable-next-line
  }, [section]);

    return (
      <div className={!isDay ? 'theme--black' : ''}>
        <div>
          <Menu open={showMenu} toggleMenu={toggleMenu} theme={isDay} class={menuClass}/>
        </div>
        <div className="menu-button" onClick={toggleMenu} >
           <div className={ showMenu ? 'menu-button__toggle--close' : 'menu-button__toggle' }>
             <div className="item item--1"></div>
             <div className="item item--2"></div>
             <div className="item item--3"></div>
           </div>
        </div>
        <div className="theme-switch" onClick={() => toggleTheme()}>
            { isDay ? <Sun /> : <Moon /> }
        </div>
        <div className="wrapper">
		     { selectedTemplate !== null ? (
			        <AwesomeSlider animation="cubeAnimation" selected={selectedTemplate} onTransitionRequest={selectedTemplates} infinite={false} mobileTouch={true}>
						    { templates }
              </AwesomeSlider>
          ) : (
            ''
		    )}
        </div>
      </div>
    );
  }

export default App;
