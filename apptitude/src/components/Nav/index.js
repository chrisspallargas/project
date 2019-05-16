import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import './index.scss';
import { connect } from 'react-redux';
import { setUserInfo } from '../../redux/actions/userAction';
import Auth from '../../services/Auth';
import {Link} from 'react-router-dom';

class Nav extends Component {
    logout = () => {
        Auth.logout();
        this.props.setUserInfo(null);
      }
    

    render() {

        let name="";
        if(this.props.userInfo){name = this.props.userInfo.name;}
        console.log("render Nav")
        
        return (
            <div className='nav'>
                <div className='nav-title'>
                <Link to="option-page"><img className='nav-title'
                        alt='logo'
                        src={require('../../img/LogoApptitude.png')}>
                    </img></Link>
                </div>

                <div className='nav-user'>
                <div className='nav-user-name'>{name}</div>
                    <div className='nav-user-img'>
                        <img className='nav-user-img'
                            alt='icono'
                            src={require('../../img/user-icons.png')}>
                        </img>
                        <Menu right width={ '160px' }>
                            <Link to={'/favorites'} id="myRoutines" className="menu-item"
                                >- My Routines</Link>
                            <Link to={'/option-page'} className="menu-item"
                            >- New routine</Link>
                            <Link to={'/'} onClick={this.logout} id="logOut" className="menu-item"
                            >- Log Out</Link>
                        </Menu>
                    </div>
        
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      userInfo: state.userReducer.user
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      setUserInfo: (user) => dispatch(setUserInfo(user))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Nav);
