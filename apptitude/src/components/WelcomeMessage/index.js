import React, { Component } from 'react';


class WelcomeMessage extends Component {
    render() {
        return (
            <div className="welcomeMessage">
                <div className="helloText">Welcome to</div>
                <div className="titleApp">Apptitude</div>
                <div className="message">Here you will enjoy: </div>

                <div className="advantatges">
                    <div className="icon1">icon1</div>
                    Picking of exercices adjusted to the time you have</div>


                <div className="advantatges2">
                    <div className="icon2">icon2</div>
                    Training programs based on your needs</div>


                <div className="advantatges3">
                    <div className="icon3">icon3</div>
                    Save your favorite routines</div>

            </div>
        )
    }
}

export default WelcomeMessage;