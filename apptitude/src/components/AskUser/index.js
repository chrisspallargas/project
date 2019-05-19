import React, { Component } from 'react';
import { Link } from 'react-scroll';
import LogIn from '../LogIn';
import SignIn from '../SignIn';
import './index.scss';


class AskUser extends Component {
    render() {
        return (
            <div>
                <div className='principal-container'>
                    <img className='principal' alt='welcomeApp' src={require('../../img/WelcomeToApptitude.png')} />
                </div>
                <div className='askUser'>
                    <LogIn />

                    <Link to="section2" smooth={true} offset={-70} duration={2000}>
                        <button className='buttSign' type='button'>REGISTER WITH US</button>
                    </Link>
                </div>

                <div id="section2">
                    <SignIn />
                </div>
            </div >


        )
    }

}

export default AskUser; 