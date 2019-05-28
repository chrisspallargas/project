import React, { Component } from 'react';
import './index.scss';
import Nav from '../../components/Nav';
import Exercise from '../../components/Exercise';
import Data from '../../services/Data';
import ModalSave from '../../components/ModalSave';
import { connect } from 'react-redux'
import { setUserInfo } from '../../redux/actions/userAction';

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
            saved: false,
            message:''
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

        let { randomSelected, exerciseTime, breakTime } = this.state;
        let durationTotal = (randomSelected.length * exerciseTime) + (breakTime * (randomSelected.length - 1));
        let arrExercises = [];
        for (let i = 0; i < randomSelected.length; i++) {
            arrExercises.push({ idExercise: randomSelected[i].id, duration: exerciseTime });
        }
        let data = { duration: durationTotal, exercices: arrExercises, breakTime: breakTime };
       
        let { success, idRoutine } = await Data.addRoutine(name, data, this.props.userInfo.uid);
        if (success) {
            this.setState({ saved: true, visible: false });
            
            let userInfo=this.props.userInfo;
            userInfo.myRoutinesNames.push(name);
            userInfo.myRoutines.push(idRoutine);
            this.props.setUserInfo(userInfo);
        }

    }

    start = async () => {
        if (!this.state.saved) {
            await this.metodoSave("unsaved");
        }
        let idRoutine = await Data.getUltimaRoutine(this.props.userInfo.uid);
        
        this.props.history.push('/training-routine/' + idRoutine);
    }

    onMuscular = () => {
       
        let { muscularGroups, valueRange } = this.state;
        let toRandom = [];
        if (muscularGroups.length !== 0) {
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

        }else{
            this.setState({message:"You must choose an option"})
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

    checkedGroup = (group) => {
        let { muscularGroups } = this.state;
        let newMuscularGroups = muscularGroups.slice();
        if (!newMuscularGroups.includes(group)) {
            newMuscularGroups.push(group);
        } else {
            let index = newMuscularGroups.indexOf(group)
            newMuscularGroups.splice(index, 1);
        }

        console.log('muscularGroups:', newMuscularGroups);
        this.setState({ muscularGroups: newMuscularGroups, message:'' });
    }

    changeRange = (event) => {
        this.setState({ valueRange: event.target.value });
    }

    metodoEmpty = () => { }

    discard = () => {
        this.props.history.push('/option-page');
    }


    render() {
        let { randomSelected, showModal, valueRange, visible, saved, muscularGroups, message } = this.state;
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
                    animation={'flip'} width={300} height={330}
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
                        <div className='message-alert'>{message}</div>
                        <button type="button" value="Ok!" className='form-ok-butt' onClick={this.onMuscular}>Ok!</button>
                        
                    </div>
                </Rodal>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      userInfo: state.userReducer.user
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      setUserInfo: (user) => dispatch(setUserInfo(user))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(withUser(RandomPage));
