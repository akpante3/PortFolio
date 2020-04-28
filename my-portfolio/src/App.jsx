import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import Nav from './component/Nav/Nav';
import Indroduction from './pages/introduction/introduction';
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
  render () {
    return (
      <div>
        <div>
          <Menu />
        </div>
        <div className={['wrapper', 'toggle-nav-buttons'].join(' ')}>
            <Nav />
            <AwesomeSlider animation="cubeAnimation" selected={1} infinite={false} mobileTouch={true}>
                { templates }
            </AwesomeSlider>
        </div>
      </div>
    );
  }
}

export default App;
