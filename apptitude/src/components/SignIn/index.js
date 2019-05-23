import React, { Component } from 'react';
import './index.scss';
import Auth from '../../services/Auth';
import Data from '../../services/Data';
import {withRouter} from 'react-router-dom';

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
    
    componentDidMount() {
        Auth.registerAuthObserver((user) => {
          if (user) {
            // User is signed in.
            const { name, email } = this.state;
            if(name && email){
                const success = Data.addObjectWithId('users', user.uid, { 
                    name,  
                    email,
                    uid: user.uid,
                    myRoutines:[],
                    myRoutinesNames:[] 
                });
    
                if(success) {
                    console.log("GUARDAR NUEVO USUARIO EN REDUX");
                   
            }
        }
            
          } else {
            console.log("OJO: no hay usuario")
    
          }

          this.props.history.push('/');
        })
      }
    
    onSubmit = async(event) => {
        event.preventDefault();
        const { email, password } = this.state;
    
        this.setState({message: ''});
    
        const error = await Auth.signup(email, password)
        this.props.history.push('/option-page');
    
        if(error) {
          this.setState({message: Auth.getErrorMessage(error)});
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

export default withRouter(SignIn);