import React, { Component } from 'react';
import './index.scss';


export default class MuscularGroupOptions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            legs: false,
            arms: false,
            buttocks: false,
            abs: false,
            cardio: false
        }
    }

    render() {
        return (
            <div className='muscular-group'>
                <div className='question'>Muscular groups to work out:</div>
                <form className='form-groups'>
                    <label><input type="checkbox" onChange={this.OnchangeLegs} name="legs" /> Legs </label>
                    <label><input type="checkbox" onChange={this.OnchangeArms} name="arms" /> Arms </label>
                    <label><input type="checkbox" onChange={this.OnchangeButtocks} name="buttocks" /> Buttocks </label>
                    <label><input type="checkbox" onChange={this.OnchangeAbs} name="abs" /> Abs </label>
                    <label><input type="checkbox" onChange={this.OnchangeCardio} name="cardio" /> Cardio </label>
                    <input type="submit" value="Ok!" className='form-ok-butt' />
                </form>

            </div>
        )
    }
}