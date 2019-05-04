import React, { Component } from 'react';

import './index.scss';
import Nav from '../../components/Nav';
import Buttons from '../../components/Buttons';


export default class BreakPage extends Component{
    
    render() {
       
        return (
            <div className='end-page'>
                <Nav /> 
                <div className='final-message'>¡Congratulations!</div>
                <Buttons/>         
            </div>
        )
    }
}