import React, { Component } from 'react';

import './index.scss';

export default class Exercise extends Component {

    handleClick = () => {
        this.props.metodo(this.props.id, this.props.pos);
    }

    render() {
        let { img, name, intensity } = this.props;

        return (
            <div className='containerEx'>
                <div onClick={this.handleClick} className='eachEx'>
                    <div className='exercise-img'><img className="img-tab" alt="imagen de ejercicio" src={img}/></div>
                    <div className='exercise-name'>{name}</div>
                </div>
            </div>
        )
    }
}