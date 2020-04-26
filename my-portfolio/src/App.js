import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import Nav from './component/Nav/Nav'
import Indroduction from './pages/introduction/Introduction'
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
import './App.scss';

function App() {
  const list = [
    <Indroduction />,
    <div>2</div>,
    <div>3</div>,
    <div>4</div>
  ]
  const templates = list.map((data, index) =>
     <div key={index} > {data}</div>
  );
  return (
    <div className={['wrapper', 'toggle-nav-buttons'].join(' ')}>
      <Nav />
      <AwesomeSlider animation="cubeAnimation">
          { templates }
      </AwesomeSlider>
    </div>
  );
}

export default App;
