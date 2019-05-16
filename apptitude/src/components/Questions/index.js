import React, { Component } from 'react';
import './index.scss';

class Questions extends Component {
    
    changeBreak = (event) => {
        this.props.metodoBreak(parseInt(event.target.value));
    }

    changeExerc = (event) => {
        this.props.metodoExerc(parseInt(event.target.value));
    }

    render() {
        return (
            <div className='questions-block'>
                <div className='minutes'>
                    <div className='quest'>Break time (sec):</div>

                    <select name="min-options" onChange={this.changeBreak}>
                        <option className='min-value' value="10">10</option>
                        <option className='min-value' value="15">15</option>
                        <option className='min-value' value="20">20</option>
                        <option className='min-value' value="25">25</option>
                        <option className='min-value' value="30">30</option>
                    </select>
                </div>
                <div className='minutes'>
                    <div className='quest'>Time per exercise (sec):</div>

                    <select name="min-options" onChange={this.changeExerc}>
                        <option className='min-value' value="10">10</option>
                        <option className='min-value' value="15">15</option>
                        <option className='min-value' value="20">20</option>
                        <option className='min-value' value="25">25</option>
                        <option className='min-value' value="30">30</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Questions;