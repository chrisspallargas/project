import React, { Component } from 'react';
import WelcomeMessage from '../../components/WelcomeMessage'

class Home extends Component{
    render(){
        return(
            <div>
                <WelcomeMessage></WelcomeMessage>
            </div>
        )
    }
}

export default Home;