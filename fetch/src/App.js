import React, { Component } from 'react';
import Login from './components/login';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import './App.css';

class App extends Component {

  componentDidMount() {
    axios.get(``).then(res => {
      this.setState({: res.data})
    })
  }
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
