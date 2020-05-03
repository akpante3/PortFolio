import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import Indroduction from './pages/introduction/Introduction';
import MyOffer from './pages/skills/MyOffer';
import Portfolio from './pages/portfolio/Portfolio';
import Menu from './pages/menu/Menu';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
import './App.scss';

const list = [
  <Indroduction />,
  <Portfolio />,
  <MyOffer />,
  <div>4</div>
]

const templates = list.map((data, index) =>
   <div key={index} > {data}</div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }
  toggleMenu = () => {
      this.setState({ ...this.state, showMenu: !this.state.showMenu })
  }
  render () {
    return (
      <div>
        <div>
          { this.state.showMenu ? <Menu /> : '' }
        </div>
        <div className="menu-button" onClick={this.toggleMenu}>
           <div className={ this.state.showMenu ? 'menu-button__toggle--close' : 'menu-button__toggle' }>
             <div className="item item--1"></div>
             <div className="item item--2"></div>
             <div className="item item--3"></div>
           </div>
        </div>
        <div className="wrapper">
            <AwesomeSlider animation="cubeAnimation" selected={2} infinite={false} mobileTouch={true}>
                { templates }
            </AwesomeSlider>
        </div>
      </div>
    );
  }
}

export default App;
