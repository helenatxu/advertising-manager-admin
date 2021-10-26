import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import AdminPanel from './components/AdminPanel'
import Navigation from './components/Navigation';
import Create from './components/Create';
import Banner from './components/Banner';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation/>
          <div className="list">
            <div className="header">
              <h1>Banners List</h1>
            </div>
            <Switch>
            <Route exact path="/">
              <AdminPanel/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/api/v1/banners/:id">
              <Banner/>
            </Route>
          </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
