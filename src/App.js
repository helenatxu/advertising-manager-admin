import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import AdminPanel from './components/AdminPanel'
import Navigation from './components/Navigation';
import Create from './components/Create';
import Banner from './components/Banner';
import BannersList from './components/BannersList';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation/>
          <div className="list">
            <div className="header">
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
            <Route path="/api/v1/banners">
              <BannersList/>
            </Route>
          </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
