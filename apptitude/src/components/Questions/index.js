import React, { Component } from 'react';
import './index.scss';

class Questions extends Component {
    
    changeBreak = (event) => {
        this.props.metodoBreak(event.target.value);
    }

    changeExerc = (event) => {
        this.props.metodoExerc(event.target.value);
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
                {/* <div className='YesNo'>
                    <div className='quest'>Do you want to repeat exercices in series?</div>
                    <form className='form-yes-no'>
                        <label><input type="checkbox" name="yes"/> Yes </label>
                        <label><input type="checkbox" name="no"/> No </label><br/>
                        <input type="submit" value="Ok!" className='form-ok-butt'/>
                    </form>
                </div> */}
            </div>
        )
    }
}

export default Questions;