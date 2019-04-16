import React, { Component } from 'react';
import './css/App.css';
import CompositionComponent from './components/composition';
import TvComponent from './components/tv';

class App extends Component {
  render() {
    return (
      <div className="App App-header">
      <div className="container">
        <div className="row">
          <div className="col">
            <CompositionComponent />
          </div>
          <div className="col">
            <TvComponent />
          </div>
        </div>
        </div>
      </div>
    );
  }
}
export default App
