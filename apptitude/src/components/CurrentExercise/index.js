import React, { Component } from 'react';
import './index.scss';



export default class CurrentExercise extends Component {

    render() {

        return (
            <div className='current-exercise'>

                <img className='current-img'
                    alt='currentExercise'
                    src={require('../../img/1armplank.png')}>
                </img>
                <div className='current-name'>V push-ups with clenched fists</div>
                <div className='current-intensity'>Regular intensity</div>
                <div className='current-description'>
                    Lie flat on your back and bend your knees about 60 degrees. 
                    Keep your feet flat on the floor and place your hands loosely behind your head. 
                    This will be your starting position. Now curl up and bring your right elbow and 
                    shoulder across your body while bring your left knee in toward your left shoulder 
                    at the same time. Reach with your elbow and try to touch your knee.

            </div>


            </div>
        )
    }
}