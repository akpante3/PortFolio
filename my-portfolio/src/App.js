import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import Indroduction from './pages/introduction/Introduction';
import Menu from './pages/menu/Menu';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
import './App.scss';

const list = [
  <Indroduction />,
  <div>2</div>,
  <div>3</div>,
  <div>4</div>
]

const templates = list.map((data, index) =>
   <div key={index} > {data}</div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: true
    };
  }

  render () {
    return (
      <div>
        <div>
          { this.state.showMenu ? <Menu /> : '' }
        </div>
        <div className="menu-button">
        { !this.state.showMenu ? (
            <svg viewBox="0 0 100 80" width="100" height="20">
            <rect className="menu-button__item--1" height="10"></rect>
            <rect className="menu-button__item--2" y="30" height="10"></rect>
            <rect className="menu-button__item--3" y="60" height="10"></rect>
          </svg>
        ) : (
          <span className="menu-button__close"><a  href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></span>
        )
        }
        </div>
        <div className={['wrapper', 'toggle-nav-buttons'].join(' ')}>
            <AwesomeSlider animation="cubeAnimation" selected={1} infinite={false} mobileTouch={true}>
                { templates }
            </AwesomeSlider>
        </div>
      </div>
    );
  }
}

export default App;
