import React, { Component } from 'react';
import Nav from '../../components/Nav';
import './index.scss';
import CounterDown from '../../components/CounterDown';



export default class BreakPage extends Component{
    
    render() {
       
        return (
            <div className='break-page'>
                <Nav />
                <div className='message'>Break time</div>
                <CounterDown />          
            </div>
        )
    }
}