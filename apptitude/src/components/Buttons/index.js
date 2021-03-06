import React, { Component } from 'react';
import ModalSave from '../ModalSave';
import {withRouter} from 'react-router-dom';
import Data from '../../services/Data';

import './index.scss';


class Buttons extends Component {
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
       
      }

    discard = () =>{
        this.props.metodoDiscard();
    }

    manageStart = async() =>{
        if(!this.props.saved){
            await this.props.metodoSave("unsaved");
        }
        let idRoutine=await Data.getUltimaRoutine(this.props.user);
        
        this.props.history.push('/training-routine/'+idRoutine);
    }

    render() {
        const {visible} = this.state;
        return (
            <div className='general-buttons'>
    
                {this.props.selectedLength>0 && !this.props.saved && <ModalSave
                    text={"Save"}
                    visible={visible}
                    onClose={this.onCloseModal}
                    metodoSave={this.props.metodoSave}
                    />}

                {this.props.saved && <button className='buttNormal' onClick={this.discard} type='button'>Go to menu</button>}
                {!this.props.saved && <button className='buttNormal' onClick={this.discard} type='button'>Discard</button>}
                {this.props.selectedLength>1 && <button className='buttNormal' onClick={this.manageStart} type='button'>Let's start!</button>}
            </div>
        )
    }
}


export default withRouter(Buttons);