import React, { Component } from 'react';
import './index.scss';


export default class MuscularGroupOptions extends Component {
 

    onChange = (event) =>{
       this.props.checkedGroup(event.target.name);
    } 


    render() {
        return (
            <div className='muscular-group'>
                <div className='question'>Muscular groups to work out:</div>
                <form className='form-groups'>
                    <label><input type="checkbox" onChange={this.onChange} name="legs" /> Legs </label>
                    <label><input type="checkbox" onChange={this.onChange} name="arms" /> Arms </label>
                    <label><input type="checkbox" onChange={this.onChange} name="buttocks" /> Buttocks </label>
                    <label><input type="checkbox" onChange={this.onChange} name="abs" /> Abs </label>
                    <label><input type="checkbox" onChange={this.onChange} name="cardio" /> Cardio </label>
                </form>

            </div>
        )
    }
}