import React, { Component } from 'react';
import AskUser from '../../components/AskUser';
import './index.scss';

class Home extends Component{
    render(){
        return(
            <div className="Apptitude">>
                <AskUser></AskUser>
            </div>
        )
    }
}
export default Home;