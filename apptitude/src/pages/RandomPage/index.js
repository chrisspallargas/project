import React, { Component } from 'react';
import Nav from '../../components/Nav';
import './index.scss';
import Buttons from '../../components/Buttons';
import ButtonComponent from '../../components/ButtonComponent';
import Exercise from '../../components/Exercise';

import Rodal from 'rodal';


// include styles
import 'rodal/lib/rodal.css';


import Questions from '../../components/Questions';
import MuscularGroupOptions from '../../components/MuscularGroupOptions';


export default class RandomPage extends Component{
    constructor(props){
        super(props);

        this.state={
            randomSelected:[],
            showModal:true,
            breakTime: 10,
            exerciseTime: 10,
            muscularGroups: []
        }
    }

    show = () => {
        this.setState({ showModal: true });
    }

    hide = () => {
        this.setState({ showModal: false });
    }

    metodoBreak = (value) => {
        this.setState({ breakTime: value });
    }

    metodoExerc = (value) => {
        this.setState({ exerciseTime: value });
    }

    onMuscular = (event) => {
        //aquí va la funcion del random

    }

    checkedGroup = (group) => {
        let { muscularGroups } = this.state;
        let newMuscularGroups = muscularGroups.slice();
        if (!newMuscularGroups.includes(group)) {
            newMuscularGroups.push(group);
        } else {
            let index = newMuscularGroups.indexOf(group)
            newMuscularGroups.splice(index, 1);
        }

        console.log(newMuscularGroups);
        this.setState({ muscularGroups: newMuscularGroups });
    }
    render() {
        let {randomSelected, showModal} = this.state;
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
                <Rodal customStyles={{ backgroundColor: "#E6E6E6", borderRadius: '25px' }}
                    animation={'flip'} width={300} height={300}
                    visible={showModal} onClose={this.hide}>
                    <div>
                        <Questions metodoBreak={this.metodoBreak} metodoExerc={this.metodoExerc} />
                        <MuscularGroupOptions checkedGroup={this.checkedGroup} />
                        <button type="button" value="Ok!" className='form-ok-butt' onClick={this.onMuscular}>Ok!</button>
                    </div>
                </Rodal>

            </div>
        )
    }
}
