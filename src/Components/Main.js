import React, { Component } from 'react';
import Nav from './Nav';
import Graph from './Graph';


class Main extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Graph />
      </div>
    );
  }
}

export default Main;
