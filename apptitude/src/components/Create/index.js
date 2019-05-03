import React, { Component } from 'react';
import './index.scss';


class Create extends Component{

    render(){
        return(
            <div className='create'>
                <a href='./picking-page' className='linkCreate'><button type='button' 
                        className='buttCreate' 
                        onClick={this.createRoutine}>
                        Create your own routine
                        </button></a>

                <a href='./choosing-group' className='linkCreate'><button type='button' 
                        className='buttCreate'
                        onClick={this.createRandom}>
                        Make it Random!
                        </button></a>
                
            </div>
        )
    }
}

export default Create;