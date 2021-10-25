import React, { Component } from 'react';
import './App.css';
import BannersContainer from './components/BannersContainer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Banner List</h1>
        </div>
        <BannersContainer />
      </div>
    );
  }
}

export default App;
