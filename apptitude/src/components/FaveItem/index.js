import React, { Component } from 'react';
import './index.scss';
import {withRouter} from 'react-router-dom';



class FaveItem extends Component{
    goRoutine = () =>{
        this.props.history.push('/training-routine/'+this.props.idRoutine);
    }

    delete=()=>{
        this.props.metodoDelete(this.props.idRoutine);
    }

    render() {
       
        return (
            <div className='each-fave'>
                <div>{this.props.routine.name}</div>
                <div className='butts'>
                <button onClick={this.goRoutine} type='button' className='b'>Do it again</button>
                <button onClick={this.delete} type='button'>Delete</button>
                </div>
            </div>
        )
    }
}

export default withRouter(FaveItem);