import React, { Component } from 'react';
import './index.scss';



export default class CurrentTimer extends Component{
    
    render() {
       
        return (
            <div className='current-timer'>
             <button type='button' className='butt-down'><span className='number'>1</span></button>       
            </div>
        )
    }
}