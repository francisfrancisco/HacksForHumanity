import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopNav />
          <Switch>
          <Route exact path='' component={ Index } />
          <Route path='' component={ Dashboard } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
