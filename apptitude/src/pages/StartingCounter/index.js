import React, { Component } from 'react';
import Nav from '../../components/Nav';
import './index.scss';
import CounterDown from '../../components/CounterDown';



export default class StartingCounter extends Component{
    
    render() {
       
        return (
            <div className='start-counter'>
                <Nav />
                <div className='message'>It starts in...</div>
                <CounterDown />          
            </div>
        )
    }
}
