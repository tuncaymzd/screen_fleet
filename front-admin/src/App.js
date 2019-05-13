import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './css/App.css';
import CompositionComponent from './components/composition';
import AddResources from './components/addResources';
import TvComponent from './components/tv';
import Navbar from './components/navbar';
import ListResources from './components/listResources';

const composition = () => (
  <div className="row">
    <div className="col">
      <CompositionComponent />
    </div>
    <div className="col">
      <TvComponent />
    </div>
  </div>
);

const resources = () => (
  <div className="row">
    <div className="col">
      <ListResources />
    </div>
    <div className="col">
      <AddResources />
    </div>
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App App-header">
          <div className="container">
            <div className="sf-navbar">
              <Navbar />
            </div>
            <Route exact path="/" component={composition} />
            <Route exact path="/resources" component={resources} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App
