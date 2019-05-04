import React, { Component } from 'react';
import Nav from '../../components/Nav';
import './index.scss';
import Buttons from '../../components/Buttons';
import ButtonComponent from '../../components/ButtonComponent';
import Exercise from '../../components/Exercise';


export default class RandomPage extends Component{
    constructor(props){
        super(props);

        this.state={
            randomSelected:[]
        }
    }
    render() {
        let {randomSelected} = this.state;
        return (
            <div className='random-page'>
                <Nav />
                <div className="routine">
                    {randomSelected.map((exercise, i) => {
                        return (
                            <div className='fakeDrag'>
                                <Exercise
                                    key={i}
                                    pos={i}
                                    id={exercise.id}
                                    img={exercise.img}
                                    name={exercise.name}
                                    intensity={exercise.intensity}
                                    metodo={this.metodoDelete}
                                />
                                <ButtonComponent metodo={this.metodoDelete} />
                            </div>
                        );
                    })}
                </div>
                <Buttons />

            </div>
        )
    }
}
