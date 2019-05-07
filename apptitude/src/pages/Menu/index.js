import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Nav from '../../components/Nav';
import './index.scss';

export default class Menu extends Component {
    render() {
        return (
            <div> 
                <Nav />
                <div className='menu'>
                <Link to={'/option-page'} className='but1'>Create a routine</Link>
                <Link to={'/favorites'} className='but2'>Train a routine</Link>
                </div>
            </div>
        )
    }
}

