import React, { Component } from 'react';
import Nav from '../../components/Nav';
import Questions from '../../components/Questions';
import ExerciseTabs from '../../components/ExerciseTabs';
import Exercise from '../../components/Exercise';
import Data from '../../services/Data';
import ButtonComponent from '../../components/ButtonComponent';
import Buttons from '../../components/Buttons';
import './index.scss';
import Slider from "react-slick";
import { setUserInfo } from '../../redux/actions/userAction';
import { connect } from 'react-redux';


class PickingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: [],
            breakTime: 10,
            exerciseTime: 10,
            saved: false

        }
    }

    metodoDelete = (id, pos) => {
        let { selected } = this.state;
        let updatedSelected = selected.slice();

        updatedSelected.splice(pos, 1);

        this.setState({ selected: updatedSelected });
    }

    metodoEmpty = () => {

    }

    onAddExercise = async (id, pos) => {
        let exerciseId = await Data.getObjectDetail('exercises', id);
        let updatedSelected = this.state.selected;
        updatedSelected.push({ id, img: exerciseId.img, name: exerciseId.name, intensity: exerciseId.intensity })
        this.setState({ selected: updatedSelected });
    }

    metodoBreak = (breakTime) => {
        console.log("método break de la picking", breakTime);
        this.setState({ breakTime });
    }

    metodoExerc = (exerciseTime) => {
        this.setState({ exerciseTime });
    }

    metodoSave = async (name) => {
        let { selected, exerciseTime, breakTime, saved } = this.state;

        let durationTotal = (selected.length * exerciseTime) + (breakTime * (selected.length - 1));
        let arrExercises = [];
        for (let i = 0; i < selected.length; i++) {
            arrExercises.push({ idExercise: selected[i].id, duration: exerciseTime });
        }
        let data = { duration: durationTotal, exercices: arrExercises, breakTime: breakTime };

        const { userInfo } = this.props;
        const { success, idRoutine } = await Data.addRoutine(name, data, userInfo.uid);
        if (success) {
            this.setState({ saved: true });
            userInfo.myRoutinesNames.push(name);
            userInfo.myRoutines.push(idRoutine);
            this.props.setUserInfo(userInfo);
        }


    }

    metodoDiscard = () => {
        this.props.history.push('/option-page');
    }


    render() {

        let { selected } = this.state;
        
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            rows: 1,

            slidesPerRow: 1,
            slidesToScroll: 1,
            adaptativeHeight: false,
        };

        return (
            <div className='option-page'>
                <Nav />
                {/* <div>Routine:</div> */}
                <div className="routine">
                    {selected.length === 0 && <div className='routine-container'> Add an exercise to your routine</div>}
                    <Slider {...settings}>
                        {selected.map((exercise, i) => {
                            return (
                                <div className='fakeDrag'>

                                    <Exercise
                                        key={exercise.id + i}
                                        pos={i}
                                        id={exercise.id}
                                        img={exercise.img}
                                        name={exercise.name}
                                        intensity={exercise.intensity}
                                        metodo={this.metodoEmpty}
                                    />
                                    <ButtonComponent key={exercise.id} pos={i} id={exercise.id} metodo={this.metodoDelete} />

                                </div>
                            );
                        })}
                    </Slider>

                </div>
                <div id="separador-container"><div id="separador"></div></div>

                <Questions metodoBreak={this.metodoBreak} metodoExerc={this.metodoExerc} />
                <ExerciseTabs metodo={this.onAddExercise} />
                {this.props.userInfo !== null && <Buttons user={this.props.userInfo.uid}
                    metodoSave={this.metodoSave}
                    selectedLength={this.state.selected.length}
                    saved={this.state.saved}
                    metodoDiscard={this.metodoDiscard} />}

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

export default connect(mapStateToProps, mapDispatchToProps)(PickingPage);
