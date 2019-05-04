import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './index.scss';


class Nav extends Component {
    render() {

        let name = 'Christina'; //this.auth.getName();
        return (
            <div className='nav'>
                <div className='nav-title'>
                    <img className='nav-title'
                        alt='logo'
                        src={require('../../img/LogoApptitude.png')}>
                    </img>
                </div>

                {/* <div><span className='nav-myroutines'>My Routines</span></div> */}
                <div className='nav-user'>
                    <div className='nav-user-img'>
                        <img className='nav-user-img'
                            alt='icono'
                            src={require('../../img/user-icon.png')}>
                        </img>
                         {/* <Menu right width={ '120px' }>
                            <a id="myRoutines" className="menu-item"
                                href="/myRoutines">- My Routines</a>
                            <a id="optionPage" className="menu-item"
                                href="/OptionPage">- New routine</a>
                            <a id="logOut" className="menu-item"
                                href="/">- Log Out</a>
                        </Menu> */}
                    </div>
                    <div className='nav-user-name'>{name}</div>
                </div>
            </div>
        )
    }
}

export default Nav;
