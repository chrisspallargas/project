import React, { Component } from 'react';
import './index.scss';

class Questions extends Component {

    render() {
        return (
            <div className='questions-block'>
                <div className='minutes'>
                    <div className='quest'>Total time training: </div>

                    <select name="min-options">
                        <option className='min-value' value="10">10</option>
                        <option className='min-value' value="15">15</option>
                        <option className='min-value' value="20">20</option>
                        <option className='min-value' value="25">25</option>
                        <option className='min-value' value="30">30</option>
                    </select>
                </div>
                <div className='minutes'>
                    <div className='quest'>Time per exercise: </div>

                    <select name="min-options">
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