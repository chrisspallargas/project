import React, { Component } from 'react';
import Nav from '../../components/Nav';
import Create from '../../components/Create';
import './index.scss';

class OptionPage extends Component{
    render(){
        return(
            <div className='option-page'>
               <Nav/>
               <Create/>
            </div>
        )
    }
}

export default OptionPage;