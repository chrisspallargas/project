import React, { Component } from 'react';
import './index.scss';

export default class ButtonComponent extends Component {
    render(){
        return(
            <div className='botonMod'>
                <button
                key={this.props.i} 
                pos={this.props.i} 
                tipo='delete' 
                metodo={this.metodoDelete}>
                <img className='trash-img' src={require('../../img/trash-icon.png')}></img>
                </button>

                <button clasName='replace' 
                key={this.props.i} 
                pos={this.props.i} 
                tipo='replace' 
                metodo={this.metodoReplace}>
                <img className='replace-img' src={require('../../img/replace-icon2.png')}></img>
                </button>
            </div>
        )
    }
}

