import React, { Component } from 'react';
import './index.scss';
import ModalSave from '../ModalSave';


export default class PickingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }
    }

    onSaveRoutine = (event) =>{
        this.setState({[event.target.name]: event.target.value}, {visible: true});
    }


    onCloseModal = () => {
        this.setState({visible: false});
        this.props.history.push('/'); 
      }

    render() {
        const {visible} = this.state;
        return (
            <div className='general-buttons'>
                {/* <button className='butt' type='button' onClick={this.onSaveRoutine}>Save</button> */}
                <ModalSave
                    visible={visible}
                    onClose={this.onCloseModal}
                    />
                <button className='butt' type='button'>Discard</button>
                <button className='butt' type='button'>Let's start!</button>
            </div>
        )
    }
}