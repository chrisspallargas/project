import React, { Component } from 'react';
import './index.scss';


export default class PickingPage extends Component {
    render() {
        return (
            <div className='general-buttons'>
                <button className='butt' type='button'>Save</button>
                <button className='butt' type='button'>Discard</button>
                <button className='butt' type='button'>Let's start!</button>
            </div>
        )
    }
}