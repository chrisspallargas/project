import React, { Component } from 'react';
import './index.scss';
import Nav from '../../components/Nav';
import CurrentExercise from '../../components/CurrentExercise';
import CurrentTimer from '../../components/CurrentTimer';
import Data from '../../services/Data';
import StartingCounter from '../../components/StartingCounter';
import CounterDown from '../../components/CounterDown';
import Buttons from '../../components/Buttons';



export default class TrainingRoutine extends Component{
    constructor(props){
        super(props);

        this.timer=null;
        this.breakTime=4;

        this.state={
            currentExercise:null,
            routine:null,
            detailsExercises:null,
            exerciseNumber:0,
            remainingTime:this.breakTime,
            // initial ,start, exercise, break, end
            periodType: 'initial',
            loading:true
        }
    }

    async componentDidMount() {
        const routine = await Data.getObjectDetail('routines', this.props.match.params.id);
        console.log("TCL: TrainingRoutine -> componentDidMount -> routine", routine);
        

        const detailsExercises=[];
        for(let i=0;i<routine.exercices.length;i++){
            const exerc = await Data.getObjectDetail('exercises', routine.exercices[i].idExercise);
			detailsExercises.push(exerc);
        }
        // console.log("TCL: TrainingRoutine -> componentDidMount -> detailsExercises", detailsExercises)
         const currentExercise = detailsExercises[0];

         this.setState({currentExercise, routine, detailsExercises, loading:false});

    }   

    gestionarState = () =>{
        let {currentExercise,routine,detailsExercises,exerciseNumber,remainingTime,periodType} = this.state;

        if(periodType === 'start'){
            let duration= routine.exercices[0].duration;
            this.setState({periodType:'exercise',remainingTime:duration+1});
            this.gestionarTime();
        }

        if(periodType === 'exercise'){
            if(exerciseNumber === detailsExercises.length-1){
                this.setState({periodType:'end'});

            } else {
                this.setState({periodType:'break', remainingTime:this.breakTime});
                this.gestionarTime();
            }
        }

        if(periodType === 'break'){
            exerciseNumber=exerciseNumber+1;
			// console.log("TCL: TrainingRoutine -> gestionarState -> exerciseNumber++", exerciseNumber++)
            
            remainingTime = routine.exercices[exerciseNumber].duration;
            currentExercise = detailsExercises[exerciseNumber];
            this.setState({periodType:'exercise', remainingTime,currentExercise,exerciseNumber});
            this.gestionarTime();
        }        
    }

    gestionarTime = () =>{
        
        let {remainingTime} = this.state;
        remainingTime--;
        if(remainingTime>=0){
            this.timer = setTimeout(this.gestionarTime,1000);
            this.setState({remainingTime});
        }else{
            this.gestionarState();
        }
    }


    startRoutine = () =>{
        this.gestionarTime();
        this.setState({periodType:'start'});


    }
    
    render() {
       const {loading,currentExercise,routine,exerciseNumber,periodType,remainingTime} = this.state;
        return (
            <div className='exercise-page'>
                <Nav />
                {loading && <div>loading</div>}
                {!loading && periodType === "initial" && <button onClick={this.startRoutine} type="button">Start</button>}
                {!loading && periodType === "start" && <div>
                                                            <StartingCounter counter={remainingTime} />
                                                       </div>}
                {!loading && periodType === "exercise" && <div>
                                                        <CurrentExercise exerc={currentExercise} />
                                                        <CounterDown counter={remainingTime}/>
                                                        </div>}
                {!loading && periodType === 'break' && <div>
                                                        <div>Break time. Next exercise in...</div>
                                                        <CounterDown counter={remainingTime} />
                                                         </div>}
                {!loading && periodType === 'end' && <div>
                                                        <div className='final-message'>¡Congratulations!</div>
                                                        <Buttons/>
                                                    </div>}
                                                
            </div>
        )
    }
}


{/* <div className='exercise-page'>
<Nav />
<CurrentExercise />
<CurrentTimer/>
</div> */}