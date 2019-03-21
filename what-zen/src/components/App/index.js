import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../Navigation/index';
import React, { Component } from 'react';
import './App.css';
import Column from '../Column/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Column/>
      </div>
    );
  }
}

export default App;
