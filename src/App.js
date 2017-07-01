import React, { Component } from 'react';
import Banner from './Components/Banner';
import Intro from './Components/Intro';
import './styles/app.css'

class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Intro />
      </div>
    );
  }
}

export default App;
