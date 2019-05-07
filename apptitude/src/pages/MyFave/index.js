import React, { Component } from 'react';

import './index.scss';
import Nav from '../../components/Nav';
import FaveItem from '../../components/FaveItem';
import Data from '../../services/Data';



export default class MyFave extends Component{
    constructor(props){
        super(props);

        this.state={
            user:null,
            routines:null,
            loading:true
        }
    }

    componentDidMount = async () => {
        const user = await Data.getObjectDetail('users','cDx1gnF6lEIBnHusKdnG');
        
        let routines = [];
        for (let i=0; i<user.myRoutines.length; i++){
            let routine = await Data.getObjectDetail('routines', user.myRoutines[i]);
            routines.push(routine);
        }
        this.setState({user, routines, loading: false});
    }

    render() {
        const {user, routines, loading} = this.state;
        return (
            <div className='my-fave'>
                <Nav /> 
                {loading && <div>loading</div>}
                {!loading && <div>
                <div className='faves'>My favorite routines</div>
                {routines.map((elem)=>{
                    return <FaveItem routine={elem}/> 
                })}
                </div>}  
            </div>
        )
    }
}