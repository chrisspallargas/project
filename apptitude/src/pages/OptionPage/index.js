import React, { Component } from 'react';
import Create from '../../components/Create';
import './index.scss';
import Nav from '../../components/Nav';

class OptionPage extends Component{
    render(){
        return(
            <div className='option-page'>
                <Nav />
               <Create/>
            </div>
        )
    }
}

export default OptionPage;