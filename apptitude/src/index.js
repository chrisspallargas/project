import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase/app');

var firebaseConfig = {
    apiKey: "AIzaSyA9XEk4nBHmJkRrbA2YlTrD_5d9BCP3dQs",
    authDomain: "skylab-project.firebaseapp.com",
    databaseURL: "https://skylab-project.firebaseio.com",
    projectId: "skylab-project",
    storageBucket: "skylab-project.appspot.com",
    messagingSenderId: "252377584303",
    appId: "1:252377584303:web:ffcd929c892a4c80"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
