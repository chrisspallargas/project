import React, { Component } from 'react';
import Nav from '../../components/Nav';
import './index.scss';
import Questions from '../../components/Questions';
import MuscularGroupOptions from '../../components/MuscularGroupOptions';


export default class ChoosingGroup extends Component{
    render(){
        return(
            <div className='choosing'>
               <Nav/>
               <Questions />
               <MuscularGroupOptions />
            </div>
        )
    }
}