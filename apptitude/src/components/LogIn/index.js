import React, { Component } from 'react';
import'./index.scss';

class LogIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            message: ''
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        // console.log("OnSubmit LogIn");

        const { email, password } = this.state;
        //console.log("email: "+ email +" y password: "+ password);
        let correct = this.checkPassword(email, password);
        if (!correct) {
            document.getElementById("login-form").reset();
            this.setState({ message: "Incorrect info, please try again" });
        }
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value, message: '' });
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value, message: '' });
    }

    checkPassword = (email, password) => {
        let result = this.props.auth.passIsCorrect(email, password);
        console.log(result);
        return result;
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

export default LogIn;