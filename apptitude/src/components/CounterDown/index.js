import React, { Component } from 'react';
import './index.scss';



export default class CounterDown extends Component{
    
    render() {
       
        return (
            <div className='counter-down'>
            <button type='button' className='butt-down'><span className='number'>{this.props.counter}</span></button> 
            </div>
        )
    }
}
