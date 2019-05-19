import React, { Component } from 'react';
import './index.scss';
import Nav from '../../components/Nav';


export default class Profile extends Component {

    render() {
        return (
            <div className='profile'>
                <Nav />
                <div className='user'>
                    <div className='image-part'>
                        <div className='user-img'></div>
                        <button><img className='edit-icon' src={require('../../img/edit-icon.png')} alt="edit icon"></img></button>
                    </div>

                    <div className='info-part'>
                        <div className='a'>
                            <div className='name'> </div>
                                Christina 
                            <button><img className='edit-icon' src={require('../../img/edit-icon.png')} alt="edit icon"></img></button>
                        </div>

                        <div className='a'>
                            <div className='email'> </div>
                            chrisspallargas@gmail.com
                        <button><img className='edit-icon' src={require('../../img/edit-icon.png')} alt="edit icon"></img></button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
