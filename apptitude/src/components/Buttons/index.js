import React, { Component } from 'react';
import ModalSave from '../ModalSave';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

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
        // this.props.history.push('/'); 
      }

    discard = () =>{
        this.props.metodoDiscard();
    }

    manageStart = async() =>{
        await this.props.metodoSave("unsaved");
        // this.props.history.push('/training-routine/'+{user.myRoutines[últimapos]})
        this.props.history.push('/training-routine/3JJ2w0vKzWH3dvOLDnjj')
    }

    render() {
        const {visible} = this.state;
        return (
            <div className='general-buttons'>
    
                {this.props.selectedLength>0 && !this.props.saved && <ModalSave
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


{/* <Link to={'/training-routine/:id'}></Link> */}

export default withRouter(Buttons);