import React from 'react';
import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css';

import './index.scss';

export default class ModalSave extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            value:"",
            errorMessage:""
        };
    }

    show = () => {
        this.setState({ visible: true });
        console.log('me muestro');
    }

    hide = () => {
        this.setState({ visible: false });
        console.log('me escondo');
    }

    changeValue = (event) =>{
        this.setState({value:event.target.value,errorMessage:""});
    }

    onSave = () =>{
        if(this.state.value!==""){
            this.props.metodoSave(this.state.value);
        }
        else{
            this.setState({errorMessage:"Routine Name Required!"})
        }
    }

    render() {
        return (
            <div>

                <button className='buttSave' type='button' onClick={this.show}>{this.props.text}</button>
                <Rodal customStyles={{ backgroundColor: "#E6E6E6", borderRadius: '25px' }}
                    animation={'flip'} width={250}
                    height={250} visible={this.state.visible} onClose={this.hide}>
                    <div className='save-routine'>
                        <div>Routine Name:</div>
                        <input type='placeholder' className='placeholder' onChange={this.changeValue}/>
                        <button type="button" value="Ok!" className='buttSave' onClick={this.onSave}>Save</button>
                    </div>
                    <div>{this.state.errorMessage}</div>
                </Rodal>
            </div>
        )
    }
}