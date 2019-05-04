import React, { Component } from 'react';
import './index.scss';


export default class BreakPage extends Component{
    
    render() {
       
        return (
            <div className='each-fave'>
                <div>Name</div>
                <div className='butts'>
                <button type='button' className='b'>Do it again</button>
                <button type='button'>Delete</button>
                </div>
            </div>
        )
    }
}