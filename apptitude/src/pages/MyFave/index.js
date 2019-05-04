import React, { Component } from 'react';

import './index.scss';
import Nav from '../../components/Nav';
import FaveList from '../../components/FaveList';



export default class BreakPage extends Component{
    
    render() {
       
        return (
            <div className='my-fave'>
                <Nav /> 
                <div className='faves'>My favorite routines</div>
                <FaveList />   
            </div>
        )
    }
}