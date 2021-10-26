import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import AdminPanel from './components/AdminPanel'
import Navigation from './components/Navigation';
import CreateBanner from './components/CreateBanner';
import CreateCampaign from './components/CreateCampaign';
import Banner from './components/Banner';
import BannersList from './components/BannersList';
import Campaign from './components/Campaign';
import CampaignsList from './components/CampaignsList';

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
            <Route path="/create_banner">
              <CreateBanner/>
            </Route>
            <Route path="/create_campaign">
              <CreateCampaign/>
            </Route>
            <Route path="/api/v1/banners">
              <BannersList/>
            </Route>
            <Route path="/api/v1/banners/:id">
              <Banner/>
            </Route>
            <Route path="/api/v1/campaigns">
              <CampaignsList/>
            </Route>
            <Route path="/api/v1/campaigns/:id">
              <Campaign/>
            </Route>
          </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
