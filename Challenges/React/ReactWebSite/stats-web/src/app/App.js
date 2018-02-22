import React, { Component } from 'react';
import './App.css';

// Components
import Summary from '../summary/summary';
import Statistics from '../statistics/statistics';
import VideoList from '../video-list/video-list';

class App extends Component {
  render() {
    return (
      <div className= "App">
        <header className="App-header">
        </header>
        <div className="container-fluid App-main">
            <div className="row">
                { /* Left - Main Section */ }
                <div className="col-sm-9">
                    <Summary />
                    <VideoList />
                </div>
                { /* Right - Location section */ }
                <div className="col-sm-3">
                    <Statistics />
                </div>
            </div>
            
        </div>
      </div>
    );
  }
}

export default App;
