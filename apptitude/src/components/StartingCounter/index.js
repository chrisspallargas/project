import React, { Component } from 'react';
import './index.scss';
import CounterDown from '../CounterDown';



export default class StartingCounter extends Component{
    
    render() {
       
        return (
            <div className='start-counter'>
                <div className='message'>It starts in...</div>
                <CounterDown counter={this.props.counter}/>          
            </div>
        )
    }
}
