import React, { Component } from 'react';
import './index.scss';


export default class FaveItem extends Component{
    
    render() {
       
        return (
            <div className='each-fave'>
                <div>{this.props.routine.name}</div>
                <div className='butts'>
                <button type='button' className='b'>Do it again</button>
                <button type='button'>Delete</button>
                </div>
            </div>
        )
    }
}