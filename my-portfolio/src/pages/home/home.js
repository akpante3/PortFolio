import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router, useParams
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
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     showMenu: false,
  //     selected: 1
  //   };
  // }
  let { section } = useParams();
  const [showMenu, setshowMenu] = useState(false);
  const [selectedTemplate, setselectedTemplate] = useState(false);

  const toggleMenu = () => {
    setshowMenu(!showMenu)
  }

  const selectedTemplates = () => {
    // console.log(section, 'this is section')
    // if (section === 'indroduction') {
    //   this.setState({ ...this.state, selected: 0 })
    // } else if (section === 'portfolio') {
    //   this.setState({ ...this.state, selected: 1 })
    // } else if (section === 'my-offer') {
    //   this.setState({ ...this.state, selected: 2 })
    // } else {
    //   this.setState({ ...this.state, selected: 3})
    // }
  }


    return (
      <div>
        <div>
          { showMenu ? <Menu /> : '' }
        </div>
        <div className="menu-button" onClick={toggleMenu}>
           <div className={ showMenu ? 'menu-button__toggle--close' : 'menu-button__toggle' }>
             <div className="item item--1"></div>
             <div className="item item--2"></div>
             <div className="item item--3"></div>
           </div>
        </div>
        <div className="wrapper">
            <AwesomeSlider animation="cubeAnimation" selected={0} infinite={false} mobileTouch={true}>
                { templates }
            </AwesomeSlider>
        </div>
      </div>
    );
  }

export default App;
