import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import BannersList from './components/BannersList'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="list">
            <div className="header">
              <h1>Banner List</h1>
            </div>
            <BannersList />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
