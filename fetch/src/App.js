import React, { Component } from 'react';
import Login from './components/login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={ Login } />
            <Route path='' component={  } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
