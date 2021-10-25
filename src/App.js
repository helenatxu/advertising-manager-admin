import React, { Component } from 'react';
import './App.css';
import BannersList from './components/BannersList'

class App extends Component {
  render() {
    return (
      <div className="list">
        <div className="header">
          <h1>Banner List</h1>
        </div>
        <BannersList />
      </div>
    );
  }
}

export default App;
