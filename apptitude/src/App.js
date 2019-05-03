import React, { Component } from 'react';
import './App.scss';
//import '../node_modules/react-tiny-tabs/dist/index.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OptionPage from './pages/OptionPage';
import PickingPage from './pages/PickingPage';
import ChoosingGroup from './pages/ChoosingGroup';
import RandomPage from './pages/RandomPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
          <Route path='/random-page' component={RandomPage}></Route>
          <Route path='/choosing-group' component={ChoosingGroup}></Route>
            <Route path='/picking-page' component={PickingPage}></Route>
            <Route path='/option-page' component={OptionPage}></Route>
            <Route path='/' component={Home}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
