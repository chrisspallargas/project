import React, { Component } from 'react';
import './index.scss';
import Nav from '../../components/Nav';
import CurrentExercise from '../../components/CurrentExercise';
import CurrentTimer from '../../components/CurrentTimer';



export default class ExercisePage extends Component{
    
    render() {
       
        return (
            <div className='exercise-page'>
                <Nav />
                <CurrentExercise />
                <CurrentTimer/>
            </div>
        )
    }
}