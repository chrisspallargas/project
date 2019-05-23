import React, { Component } from 'react';
import './index.scss';
import Nav from '../../components/Nav';
import CurrentExercise from '../../components/CurrentExercise';
//import CurrentTimer from '../../components/CurrentTimer';
import Data from '../../services/Data';
import StartingCounter from '../../components/StartingCounter';
import CounterDown from '../../components/CounterDown';
import ModalSave from '../../components/ModalSave';
import withUser from '../../helpers/withUser';

class TrainingRoutine extends Component {
    constructor(props) {
        super(props);

        this.timer = null;
        this.breakTime = 11;

        this.state = {
            currentExercise: null,
            routine: null,
            detailsExercises: null,
            exerciseNumber: 0,
            remainingTime: this.breakTime,
            //periodTypes: initial ,start, exercise, break, end
            periodType: 'initial',
            loading: true,
            visible: false,
            saved:false,
            //randomSelected: [],
            showModal: true,
            breakTime: 10,
            exerciseTime: 10
        }
    }

    async componentDidMount() {
        const routine = await Data.getObjectDetail('routines', this.props.match.params.id);
        //console.log("TCL: TrainingRoutine -> componentDidMount -> routine", routine);


        const detailsExercises = [];
        for (let i = 0; i < routine.exercices.length; i++) {
            const exerc = await Data.getObjectDetail('exercises', routine.exercices[i].idExercise);
            detailsExercises.push(exerc);
        }
        // console.log("TCL: TrainingRoutine -> componentDidMount -> detailsExercises", detailsExercises)
        const currentExercise = detailsExercises[0];

        this.setState({ currentExercise, routine, detailsExercises, loading: false });

    }

    gestionarState = () => {
        let { currentExercise, routine, detailsExercises, exerciseNumber, remainingTime, periodType } = this.state;

        if (periodType === 'start') {
            let duration = routine.exercices[0].duration;
            this.setState({ periodType: 'exercise', remainingTime: duration + 1 });
            this.gestionarTime();
        }

        if (periodType === 'exercise') {
            if (exerciseNumber === detailsExercises.length - 1) {
                this.setState({ periodType: 'end' });

            } else {
                this.setState({ periodType: 'break', remainingTime: routine.breakTime});
                this.gestionarTime();
            }
        }

        if (periodType === 'break') {
            exerciseNumber = exerciseNumber + 1;
            // console.log("TCL: TrainingRoutine -> gestionarState -> exerciseNumber++", exerciseNumber++)

            remainingTime = routine.exercices[exerciseNumber].duration;
            currentExercise = detailsExercises[exerciseNumber];
            this.setState({ periodType: 'exercise', remainingTime, currentExercise, exerciseNumber });
            this.gestionarTime();
        }
    }

    gestionarTime = () => {

        let { remainingTime } = this.state;
        remainingTime--;
        if (remainingTime >= 0) {
            this.timer = setTimeout(this.gestionarTime, 1000);
            this.setState({ remainingTime });
        } else {
            this.gestionarState();
        }
    }


    startRoutine = () => {
        this.gestionarTime();
        this.setState({ periodType: 'start' });
    }

    metodoBreak = (value) => {
        this.setState({ breakTime: value });
    }

    metodoDiscard = async() => {

        let idRoutine = this.props.match.params.id;
        if(this.state.routine.name === "unsaved"){
            await Data.deleteObject("routines",idRoutine);
            let userInfo = await Data.getObjectDetail('users',this.props.userInfo.uid);
            let myRoutines = userInfo.myRoutines.slice();
            let myRoutinesNames = userInfo.myRoutinesNames.slice();
            let index= myRoutines.indexOf(idRoutine);
            myRoutines.splice(index,1);
            myRoutinesNames.splice(index,1);
            let data = {myRoutines:myRoutines, myRoutinesNames:myRoutinesNames};
            await Data.updateDetail('users',this.props.userInfo.uid,data);
        }

        this.props.history.push('/option-page');
    }

    editName = async (name) => {
        // Aquí irá el comportamiento del boton save del pop up, que guardará 
        // el nombre de la rútina que le pasemos.
        let idRoutine = this.props.match.params.id;
        let data = {name:name};
        let done = await Data.updateDetail("routines",idRoutine,data);
        this.setState({visible:false});
    }

    start = async() =>{
        document.location.reload();
    }

    render() {
        const { loading, currentExercise, periodType, remainingTime, breakTime,visible } = this.state;
        console.log("Render break",breakTime)
        return (
            <div className='exercise-page'>
                <Nav />
                {loading && <div>loading</div>}
                {!loading && periodType === "initial" && <div className='cont-save'>
                                                        <button onClick={this.startRoutine} 
                                                        type="button" className='butt-start'>
                                                        <img alt='start'className='start-img' 
                                                        src={require ('../../img/start.png')} />
                                                        </button>
                                                        </div>}
                {!loading && periodType === "start" && <div>
                    <StartingCounter counter={remainingTime} />
                </div>}
                {!loading && periodType === "exercise" && <div>
                    <CurrentExercise exerc={currentExercise} />
                    <CounterDown counter={remainingTime} />
                </div>}
                {!loading && periodType === 'break' && <div className='cont-break'>
                    <div className='break-message'> <img alt='break'className='break-img' 
                                                    src={require ('../../img/Breaktime.png')} />
                                                    </div>
                    <CounterDown counter={remainingTime} />
                </div>}
                {!loading && periodType === 'end' && <div className='cont-final'>
                    <div className='final-message'><img alt='congrats'className='congrats-img' 
                                                    src={require ('../../img/Congratulations.png')} />
                                                    </div>
                    <div className='final-block'>
                        <ModalSave
                            text={"Edit name & save"}
                            visible={visible}
                            onClose={this.onCloseModal}
                            metodoSave={this.editName} />
                        <button className='final-butt' onClick={this.metodoDiscard}>Discard</button>
                        <button className='final-butt' onClick={this.start}>Let's start again!</button>
                    </div>
                </div>}

            </div>
        )
    }
}

export default withUser(TrainingRoutine);