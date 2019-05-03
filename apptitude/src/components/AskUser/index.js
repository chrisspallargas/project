import React, { Component } from 'react';
import { Link } from 'react-scroll';
import LogIn from '../LogIn';
import SignIn from '../SignIn';
import Auth from '../../services/Auth'
import './index.scss';

let instance = new Auth();

class AskUser extends Component {
    render() {
        return (
            <div>
                <img className='principal' alt='welcomeApp' src={require('../../img/WelcomeToApptitude.png')} />
                <div className='askUser'>
                    {/* <div className='block'> */}
                        {/* <div className='question'>Do you have<br /> an account?</div> */}
                        {/* <Link to="section1" smooth={true} offset={-70} duration={2000}> */}
                            {/* <button className='buttLog' type='button'>
                                <span>LOG IN</span>
                            </button> */}
                            <LogIn auth={instance} />
                        {/* </Link> */}
                    {/* </div> */}

                    {/* <div className='block'> */}
                        {/* <div className='question'>Register to <br />start with us</div> */}
                        <Link to="section2" smooth={true} offset={-70} duration={2000}>
                            <button className='buttSign' type='button'>REGISTER WITH US</button>
                        </Link>
                    {/* </div> */}
                </div>

                <div id="section2">
                    <SignIn auth={instance} />
                </div>

                {/* <div id="section1">
                    <LogIn auth={instance} />
                </div> */}

            </div >


        )
    }

}

export default AskUser; 