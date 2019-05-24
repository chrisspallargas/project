import React, { Component } from 'react';
import './index.scss';
import {Link} from 'react-router-dom';
import Modal from '../Modal';


export default class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }
    }

    createRoutine = (event) =>{
        this.setState({[event.target.name]: event.target.value}, {visible: true});
    }


    onCloseModal = () => {
        this.setState({visible: false});
        this.props.history.push('/'); 
      }


    render() {
        const {visible} = this.state;
        return (
            <div className='create'>
                <Link to={'/picking-page'} className='linkCreate'><button type='button'
                    className='buttCreate'
                    onClick={this.createRoutine}>
                    Create your own routine
                        </button></Link>
                <Modal
                    visible={visible}
                    onClose={this.onCloseModal}
                    />
            </div>
        )
    }
}
