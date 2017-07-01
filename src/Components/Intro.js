import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <div className="intro-div">
          <h1>What is FlowState?</h1>
          <p>Flow State is an application that presents flow logs in an intuitive and elegant manner so that insights and information from a large body of data can be quickly assimilated. It is currently designed to be used with the Maxicom2 Central Control, by Rain Bird, where Maxicom does not currently have sufficient data visibility. Maxicom2 is a smart irrigation management system that uses weather data and flow monitoring technology to control, manage, and optimize commercial irrigation systems. Maxicom collects minute-by-minute flow information daily from any number of sites. Understanding these flow logs in a timely and efficient matter is essential to maintaining the proper operation of large irrigation systems. While Maxicom does have a rudimentary flow report, it is difficult to navigate, not intuitive, does not present data across multiple sites, and lastly, not mobile (meaning reports cannot be made available on mobile devices in any fashion). The FlowState app is intented to be presented on mobile platforms and makes visualizing data across multiple sites a one-click process.</p>
        </div>
      </div>
    );
  }
}

export default Intro;
