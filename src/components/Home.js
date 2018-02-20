import React, { Component } from 'react';
import barTop from '../images/bar-top.svg';
import barTopBlack from '../images/bar-top-black.svg';
import barBottom from '../images/bar-bottom.svg';
import barBottomBlack from '../images/bar-bottom-black.svg';


import '../styles/sass/style.css';

class Home extends Component{
  render(){
    return(
      <div className="main">
        <div className="bar-top">
          <img src={barTop} alt="bar top" width="100%" className="desk" />
          <img src={barTopBlack} alt="bar top" width="100%" className="mob" />
        </div>

        <div className="main-hero-image">
          <img src="http://placehold.it/1280x700" className="desk" alt="Home hero image" width="100%" />

          <img src="http://placehold.it/375x650" className="mob" alt="Home hero image" width="100%" />
        </div>

        <div className="malt-house-center-logo">
          <img src="http://placehold.it/397x237/ffffff/000000" alt="Malt House Logo" width="100%" />
        </div>

        <div className="janus-logo">
          <img src="http://placehold.it/136x29/ffffff/000000" alt="Malt House Logo" width="100%" />
        </div>
        <div className="bar-bottom desk">
          <img src={barBottom} alt="bar bottom" width="100%" className="desk" />
          <img src={barTopBlack} alt="bar top" width="100%" className="mob" />
        </div>
        <footer>
          <div className="bar-bottom mob">
            <img src={barBottom} alt="bar bottom" width="100%" className="desk" />
            <img src={barTopBlack} alt="bar top" width="100%" className="mob" />
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
