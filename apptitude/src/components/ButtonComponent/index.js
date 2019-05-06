import React, { Component } from 'react';
import './index.scss';

export default class ButtonComponent extends Component {

    handleClick = () =>{
        // console.log("TCL: ButtonComponent -> handleClick -> this.props.id,this.props.pos", this.props.id,this.props.pos)
        this.props.metodo(this.props.id,this.props.pos)
		
    }

    render(){
        return(
            <div className='botonMod'>
                <button onClick={this.handleClick}>
                <img className='trash-img' src={require('../../img/trash-icon.png')} alt="trash icon"></img>
                </button>

                
            </div>
        )
    }
}

// <button clasName='replace' 
//                 key={this.props.i} 
//                 pos={this.props.i} 
//                 tipo='replace' 
//                 metodo={this.metodoReplace}>
//                 <img className='replace-img' src={require('../../img/replace-icon2.png')}></img>
//                 </button>

