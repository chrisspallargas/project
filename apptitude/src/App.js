import React, { Component } from 'react';
//import '../node_modules/react-tiny-tabs/dist/index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import OptionPage from './pages/OptionPage';
import PickingPage from './pages/PickingPage';
import ChoosingGroup from './pages/ChoosingGroup';
import RandomPage from './pages/RandomPage';
import BreakPage from './pages/BreakPage';
import TrainingRoutine from './pages/TrainingRoutine';
import EndPage from './pages/EndPage';
import MyFave from './pages/MyFave';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path='/favorites' component={MyFave}></Route>
            <Route path='/end' component={EndPage}></Route>
            <Route path='/training-routine/:id' component={TrainingRoutine}></Route>
            <Route path='/break-page' component={BreakPage}></Route>
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
