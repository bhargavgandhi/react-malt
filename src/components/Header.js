import React, { Component } from 'react';
import mhLogoSmall from '../images/malthouse-logo-small.svg';
import '../styles/sass/style.css';

class Header extends Component{
  render(){
    return(
      <header>
        <nav id="mainNav" className="navbar navbar-default" role="navigation">
          <div className="container">
            <div id="logo" className="navbar-header">
              <div id="nav-icon3" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <a className="navbar-brand" href="index.html">
              <img src={mhLogoSmall} width="100%" className="img-responsive" alt="Malt House Logo" />
            </a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav row mainMenu homepage">
                <li className="menuTitle greybg">
                  <a href="building.html" className="pageLinks" data-content="about">BUILDING</a>
                </li>
                <li className="menuTitle">
                  <a href="#capabilities" className="pageLinks" data-content="capabilities">LOCATION</a>
                </li>
                <li className="menuTitle dropdown desk">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">AVAILABILITIES</a>
                  <ul className="dropdown-menu">
                    <li><a href="#facts-figure">FACTS & FIGURES</a></li>
                    <li><a href="#stacking-plan">STACKING PLAN</a></li>
                    <li><a href="#test-fits">TEST FITS</a></li>
                    <li className="last"><a href="#economic-incentives">ECONOMIC INCENTIVES</a></li>
                  </ul>
                </li>

                <li className="menuTitle dropdown open mob greybg">
                  <a href="#" className="dropdown-toggle" aria-expanded="true">AVAILABILITIES</a>
                  <ul className="dropdown-menu greybg">
                    <li><a href="#facts-figure">FACTS & FIGURES</a></li>
                    <li><a href="#stacking-plan">STACKING PLAN</a></li>
                    <li><a href="#test-fits">TEST FITS</a></li>
                    <li className="last"><a href="#economic-incentives">ECONOMIC INCENTIVES</a></li>
                  </ul>
                </li>

                <li className="menuTitle">
                  <a href="#copyright" className="pageLinks" data-content="copyright">CONTACT & TEAM</a>
                </li>

                <li className="menuTitle greybg">
                  <a href="#copyright" className="pageLinks" data-content="copyright">DOWNLOADS</a>
                </li>
              </ul>

            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
