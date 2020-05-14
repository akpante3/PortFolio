import React, { useState, useEffect } from 'react';
import {
  useParams, useHistory
} from "react-router-dom";
import AwesomeSlider from 'react-awesome-slider';
import Indroduction from '../introduction/Introduction';
import MyOffer from '../skills/MyOffer';
import Portfolio from '../portfolio/Portfolio';
import Menu from '../menu/Menu';
import Contact from '../contact/Contact.js';
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
  let { section } = useParams();
  const [showMenu, setshowMenu] = useState(false);
  const [selectedTemplate, setselectedTemplate] = useState(null);
   
  useEffect(() => {
    selectedTemplates ()
  }, [section]);
 
  const toggleMenu = () => {
    setshowMenu(!showMenu)
  }

  const selectedTemplates = (e) => {
    const nextIndex = e ? e.nextIndex : section

    if ( nextIndex === 0 || nextIndex === 'about') {
		  history.push('/about')
      setselectedTemplate(0)
     } else if ( nextIndex === 1 || nextIndex === 'portfolio') {
      history.push('/portfolio')
      setselectedTemplate(1)
     } else if ( nextIndex === 2 || nextIndex === 'my-offer') {
      history.push('/my-offer')
      setselectedTemplate(2)
     } else if ( nextIndex === 3 || nextIndex === 'contact') {
      history.push('/contact')
      setselectedTemplate(3)
     } else {
      history.push('/about')
     }
  }


    return (
      <div>
        <div>
          { showMenu ? <Menu open={showMenu} toggleMenu={toggleMenu} /> : '' }
        </div>
        <div className="menu-button" onClick={toggleMenu}>
           <div className={ showMenu ? 'menu-button__toggle--close' : 'menu-button__toggle' }>
             <div className="item item--1"></div>
             <div className="item item--2"></div>
             <div className="item item--3"></div>
           </div>
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
