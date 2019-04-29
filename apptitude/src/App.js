import React, { Component } from 'react';
import './App.scss';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="Apptitude">
        <Router>
          <Switch>
            <Route path='/' component={Home}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
