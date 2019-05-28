import React, { Component } from 'react';
import './index.scss';
import Auth from '../../services/Auth';
import {withRouter} from 'react-router-dom';

class LogIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            message: ''
        }
    }


    onSubmit = async(event) => {
        event.preventDefault();
        const { email, password } = this.state;
    
        this.setState({message: ''});
    
        if(!email || !password) {
          this.setState({message: 'Email & Password required'});
          return;
        }
    
        const error = await Auth.login(email, password)
    
        if(error) {
          this.setState({message: Auth.getErrorMessage(error)});
        } else {
            this.props.history.push('/option-page');
        }
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value, message: '' });
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value, message: '' });
    }


    render() {
        const { message } = this.state;
        return (
            <form onSubmit={this.onSubmit} className="login-form" id='login-form' action="#">
                <span className='form-tags'>Email</span><input type='text'
                    className="userData"
                    name="UserEmail"
                    onChange={this.onEmailChange}>
                </input>

                <span className='form-tags'>Password</span><input type='password'
                    className="userData"
                    name="UserPassword"
                    onChange={this.onPasswordChange}>
                </input>
                <button type="submit" className="buttLog"><span>LOG IN</span></button>
                <div id="alert">{`${message}`}</div>
            </form>
        )
    }
}

export default withRouter(LogIn);