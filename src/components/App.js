import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/sass/style.scss';
import Header from './Header';
import Home from './Home';

class App extends Component {
  componentDidMount(){
    document.body.classList.add('full-height');
  }
  render() {
    return (
      <div className="content">
      <Header />
      <Home />

      </div>
    );
  }
}

export default App;
