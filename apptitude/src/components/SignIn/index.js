import React, { Component } from 'react';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            message: ''
        }
    }


    //Si el usuario existe le salta mensaje y si no llama a la funcion crear usuario
    onSubmit = (event) => {
        event.preventDefault();
        console.log("OnSubmit SignIn");
        const { email, name, password } = this.state;
        let exists = this.props.auth.userExists(email);
        console.log(exists);
        if (exists) {
            document.getElementById("signin-form").reset();
            this.setState({ message: "You are already registered" });
        } else {
            this.props.auth.createUser(name, email, password);
            // console.log(this.props.auth.users);
        }
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value, message: '' });
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
            <div className='big'>
                <div className="all-advan">
                    <div>Here you will enjoy:</div><br/>
                    <div className="advantatges">- Picking of exercices adjusted to your time</div>

                    <div className="advantatges">- Training programs based on your needs</div>

                    <div className="advantatges">- Save your favorite routines</div>
                </div>

                <form onSubmit={this.onSubmit} className="signin-form" action="#">
                
                    <span className='form-tags'>Name</span> <input type='text'
                        className="userData"
                        name="UserName"
                        onChange={this.onNameChange}>
                    </input>

                    <span className='form-tags'>Email</span> <input type='text'
                        className="userData"
                        name="UserEmail"
                        onChange={this.onEmailChange}>
                    </input>

                    <span className='form-tags'>Password </span><input type='password'
                        className="userData"
                        name="UserPassword"
                        onChange={this.onPasswordChange}>
                    </input>
                    <button type="submit" className="buttLog"><span>Send</span></button>
                    <div id="alert">{`${message}`}</div>
                </form>
            </div>
        )
    }
}

export default SignIn;