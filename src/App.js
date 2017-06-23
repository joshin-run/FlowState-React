import React, { Component } from 'react';
// import './App.css';
import './styles/app.css'

class App extends Component {
  render() {
    return (
      <div id="banner" className="banner-container">
        <div className="title-container">
          <p className="banner-title"><span>Flow</span>State</p>
          <p className="tag-line">visualizing flow data</p>
        </div>
      </div>
    );
  }
}

export default App;
