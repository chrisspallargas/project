import React, { Component } from 'react';
import './index.scss';



export default class CurrentExercise extends Component {

    render() {

        return (
            <div className='current-exercise'>

                <img className='current-img'
                    alt='currentExercise'
                    src={this.props.exerc.img}>
                </img>
                <div className='current-name'>{this.props.exerc.name}</div>
                {/* <div className='current-intensity'>{this.props.exerc.intensity}</div> */}
                <div className='current-description'>{this.props.exerc.description}</div>


            </div>
        )
    }
}