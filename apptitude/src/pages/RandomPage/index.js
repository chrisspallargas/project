import React, { Component } from 'react';
import './index.scss';
import Nav from '../../components/Nav';
import Buttons from '../../components/Buttons';
import ButtonComponent from '../../components/ButtonComponent';
import Exercise from '../../components/Exercise';
import Data from '../../services/Data';
import ModalSave from '../../components/ModalSave';

import Rodal from 'rodal';


// include styles
import 'rodal/lib/rodal.css';


import Questions from '../../components/Questions';
import MuscularGroupOptions from '../../components/MuscularGroupOptions';
import withUser from '../../helpers/withUser';


class RandomPage extends Component {
    constructor(props) {
        super(props);

        this.arrayArms = null;
        this.arrayAbs = null;
        this.arrayButtocks = null;
        this.arrayCardio = null;
        this.arrayLegs = null;

        this.state = {
            randomSelected: [],
            showModal: true,
            breakTime: 10,
            exerciseTime: 10,
            muscularGroups: [],
            valueRange: 25,
            loading: true,
            visible: false,
            saved: false
        }
    }

    async componentDidMount() {
        this.arrayArms = await Data.perMuscularGroup("arms");
        this.arrayButtocks = await Data.perMuscularGroup("buttocks");
        this.arrayLegs = await Data.perMuscularGroup("legs");
        this.arrayAbs = await Data.perMuscularGroup("abs");
        this.arrayCardio = await Data.perMuscularGroup("cardio");
        this.setState({ loading: false })
    }

    metodoSave = async (name) => {
        // Aquí irá el comportamiento del boton save del pop up, que gaurdará todo 
        // los ejercicios del this.state.selected

        let { randomSelected, exerciseTime, breakTime } = this.state;
        let durationTotal = (randomSelected.length * exerciseTime) + (breakTime * (randomSelected.length - 1));
        let arrExercises = [];
        for (let i = 0; i < randomSelected.length; i++) {
            arrExercises.push({ idExercise: randomSelected[i].id, duration: exerciseTime });
        }
        let data = { duration: durationTotal, exercices: arrExercises, breakTime: breakTime };
        // console.log(data);
        // console.log(name);
        let { success } = await Data.addRoutine(name, data, this.props.userInfo.uid);
        if (success) {
            this.setState({ saved: true, visible: false });
            // userInfo.myRoutinesNames.push(name);
            // userInfo.myRoutines.push(idRoutine);
            // this.props.setUserInfo(userInfo);
        }

    }

    start = async () => {
        if (!this.state.saved) {
            await this.metodoSave("unsaved");
        }
        let idRoutine = await Data.getUltimaRoutine(this.props.userInfo.uid);
        // this.props.history.push('/training-routine/'+{user.myRoutines[últimapos]})
        this.props.history.push('/training-routine/' + idRoutine);
    }

    onMuscular = () => {
        //console.log(this.arrayArms, this.arrayLegs, this.arrayButtocks, this.arrayAbs, this.arrayCardio);
        let { muscularGroups, valueRange } = this.state;
        let toRandom = [];
        for (let i = 0; i < muscularGroups.length; i++) {
            if (muscularGroups[i] === 'arms') {
                toRandom = toRandom.concat(this.arrayArms);
            }
            if (muscularGroups[i] === 'legs') {
                toRandom = toRandom.concat(this.arrayLegs);
            }
            if (muscularGroups[i] === 'buttocks') {
                toRandom = toRandom.concat(this.arrayButtocks);
            }
            if (muscularGroups[i] === 'abs') {
                toRandom = toRandom.concat(this.arrayAbs);
            }
            if (muscularGroups[i] === 'cardio') {
                toRandom = toRandom.concat(this.arrayLegs);
            }
        }


        let randomSelected = [];

        for (let i = 0; i < valueRange; i++) {
            randomSelected.push(toRandom[Math.floor(Math.random() * toRandom.length)]);
        }

        this.setState({ randomSelected, showModal: false, saved: false });
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

    checkedGroup = (group) => {
        let { muscularGroups } = this.state;
        let newMuscularGroups = muscularGroups.slice();
        // if(!group){
        //     this.setState({message: 'Please, choose an option'});
        // }
        if (!newMuscularGroups.includes(group)) {
            newMuscularGroups.push(group);
        } else {
            let index = newMuscularGroups.indexOf(group)
            newMuscularGroups.splice(index, 1);
        }

        console.log('muscularGroups:', newMuscularGroups);
        this.setState({ muscularGroups: newMuscularGroups });
    }

    changeRange = (event) => {
        this.setState({ valueRange: event.target.value });
    }

    metodoEmpty = () => { }

    discard = () => {
        this.props.history.push('/option-page');
    }


    render() {
        let { randomSelected, showModal, valueRange, visible, saved, muscularGroups } = this.state;
        return (
            <div className='random-page'>
                <Nav />
                <div className='sub-random'>
                <div className="routine2">
                    <div className='random-message'>These are your random exercises</div>
                    {randomSelected.map((exercise, i) => {
                        return (
                            <div className='fakeDrag2'>
                                <Exercise
                                    key={i}
                                    pos={i}
                                    id={exercise.id}
                                    img={exercise.img}
                                    name={exercise.name}
                                    intensity={exercise.intensity}
                                    metodo={this.metodoEmpty}
                                />
                            </div>
                        );
                    })}
                </div>
                {!saved && <ModalSave
                    text={"Save"}
                    visible={visible}
                    onClose={this.onCloseModal}
                    metodoSave={this.metodoSave} />}
                <button className='random-butt' onClick={this.onMuscular}>Recalculate</button>
                <button className='random-butt' onClick={this.discard}>Discard</button>
                <button className='random-butt' onClick={this.start}>Let's start!</button>
                <Rodal customStyles={{ backgroundColor: "#E6E6E6", borderRadius: '25px' }}
                    animation={'flip'} width={300} height={300}
                    visible={showModal} onClose={this.hide}>
                    <div>
                        <div className='minutes2'>
                            <div className='quest2'>Number of exercises:</div>
                            <input type="range" className='range'
                                onChange={this.changeRange}
                                min="1" max="25" step="1">
                            </input>
                            <div id="value-range">{valueRange}</div>
                        </div>
                        <Questions metodoBreak={this.metodoBreak} metodoExerc={this.metodoExerc} />
                        <MuscularGroupOptions checkedGroup={this.checkedGroup} />
                        <button type="button" value="Ok!" className='form-ok-butt' onClick={this.onMuscular}>Ok!</button>
                        {/* {!muscularGroups && this.exercise.id==='undefined' && <div className='message'>Please, choose a muscular group </div>} */}
                    </div>
                </Rodal>
                </div>
            </div>
        )
    }
}

export default withUser(RandomPage);
