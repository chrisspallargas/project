import React, { Component } from 'react';
//import '../node_modules/react-tiny-tabs/dist/index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './services/Auth';
import Data from './services/Data';
import './App.scss';
import Home from './pages/Home';
import OptionPage from './pages/OptionPage';
import PickingPage from './pages/PickingPage';
import RandomPage from './pages/RandomPage';
import TrainingRoutine from './pages/TrainingRoutine';
import MyFave from './pages/MyFave';
import { connect } from 'react-redux'
import { setUserInfo } from '../src/redux/actions/userAction';



class App extends Component {
  componentDidMount() {
    console.log('component did mount app')
    Auth.registerAuthObserver(async (user) => {
      if (user) {
        console.log('User is signed in')
        const userDetail = await Data.getObjectDetail('users', user.uid);
        
        if(userDetail) {
          this.props.setUserInfo(userDetail)
          console.log("seteamos la información de user")
        } else {
          console.log("ESPERAAAAAA me estoy registrando");
        }
        
      } else {
        console.log('User is signed out')
      }
      
    })
  }

  render() {
    
    console.log(window.location);

    
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path='/favorites' component={MyFave}></Route>
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


const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserInfo: (user) => dispatch(setUserInfo(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
