import React, { Component } from 'react';
//import '../node_modules/react-tiny-tabs/dist/index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import OptionPage from './pages/OptionPage';
import PickingPage from './pages/PickingPage';
import RandomPage from './pages/RandomPage';
import TrainingRoutine from './pages/TrainingRoutine';
import EndPage from './pages/EndPage';
import MyFave from './pages/MyFave';
import Profile from './pages/Profile';
import Menu from './pages/Menu';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
          <Route path='/menu' component={Menu}></Route>
          <Route path='/profile' component={Profile}></Route>
            <Route path='/favorites' component={MyFave}></Route>
            <Route path='/end' component={EndPage}></Route>
            <Route path='/training-routine/:id' component={TrainingRoutine}></Route>
            <Route path='/random-page' component={RandomPage}></Route>
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
