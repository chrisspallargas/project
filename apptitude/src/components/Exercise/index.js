import React, { Component } from 'react';

import './index.scss';

export default class Exercise extends Component {

    handleClick = () => {
        // console.log("TCL: Exercise -> handleClick -> this.props.id, this.props.pos", this.props.id, this.props.pos)
        this.props.metodo(this.props.id, this.props.pos);
    }

    render() {
        let { img, name, intensity } = this.props;

        return (
            <div className='containerEx'>
                <div onClick={this.handleClick} className='eachEx'>
                    <div className='exercise-img'>{img}</div>
                    <div className='exercise-name'>{name}</div>
                    <div className='exercise-intensity'>{intensity} intensity</div>
                </div>
            </div>
        )
    }
}