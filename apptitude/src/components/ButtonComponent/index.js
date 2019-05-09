import React, { Component } from 'react';
import './index.scss';

export default class ButtonComponent extends Component {

    handleClick = () =>{
        // console.log(this.props.id, this.props.pos);
        this.props.metodo(this.props.id,this.props.pos)
		
    }

    render(){
        return(
            <div className='botonMod'>
            
                <button onClick={this.handleClick}>
                <img className='trash-img' 
                src={require('../../img/trash-icon.png')} 
                alt="trash icon">
                </img>
                </button>

                
            </div>
        )
    }
}
