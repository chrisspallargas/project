import React, { Component } from 'react';
import './index.scss';
import {Link} from 'react-router-dom';

//import Popup from "reactjs-popup";

import Modal from '../Modal';


class Create extends Component {
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

                {/* <div className='linkCreate'><button type='button'
                    className='buttCreate'
                    onClick={this.createRoutine}>
                    Make it Random!
                        </button></div> */}
                <Modal
                    visible={visible}
                    onClose={this.onCloseModal}
                    />
            </div>
        )
    }
}

export default Create;

//poop up ke funciona pero no puedo poner estilos.

{/* <Popup className='pop' trigger={<button
    className='buttCreate'>
    Make it Random! </button>}
    position='right-center'>
    
    <div>
        <Questions />
        <MuscularGroupOptions />
    </div>
</Popup> */}