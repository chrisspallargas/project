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


class PickingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: [],
            breakTime: 10,
            exerciseTime: 10,
            userId:"cDx1gnF6lEIBnHusKdnG",
            saved:false

        }
    }



    // Modificar el state sacando el elemento id del array de seleccionados
    metodoDelete = (id, pos) => {
        // console.log("Delete " + id);
        let { selected } = this.state;
        let updatedSelected = selected.slice();
    //  console.log(selected);

        updatedSelected.splice(pos, 1);

        // console.log(updatedSelected);
        this.setState({ selected: updatedSelected });
    }

    metodoEmpty = () =>{

    }

    //Añadir el ejercicio con id a seleccionados
    onAddExercise = async(id, pos) => {
        
        let exerciseId = await Data.getObjectDetail('exercises',id);
        // console.log(exerciseId.img +" "+exerciseId.name+" "+exerciseId.intensity);
        let updatedSelected = this.state.selected;
        updatedSelected.push({ id, img: exerciseId.img, name: exerciseId.name, intensity: exerciseId.intensity })
        this.setState({ selected: updatedSelected });
    }

    metodoBreak = (breakTime) => {
		//console.log("TCL: PickingPage -> metodoBreak -> breakTime",breakTime);
        this.setState({breakTime});
    }

    metodoExerc = (exerciseTime) => {
		//console.log("TCL: PickingPage -> metodoExerc -> exerciseTime", exerciseTime)
        this.setState({exerciseTime});
    }

    metodoSave = async (name) => {
        // Aquí irá el comportamiento del boton save del pop up, que gaurdará todo 
        // los ejercicios del this.state.selected

        let {selected, exerciseTime, breakTime,userId} = this.state;
        let durationTotal = (selected.length * exerciseTime) + (breakTime*(selected.length-1));
        let arrExercises = [];
        for(let i=0;i<selected.length;i++){
            arrExercises.push({idExercise:selected[i].id, duration:exerciseTime});
        }
        let data = {duration:durationTotal, exercices:arrExercises, breakTime:breakTime};
        console.log(data);
        console.log(name);
        let done=await Data.addRoutine(name,data,userId);
        if(done){
            this.setState({saved:true});
        }
    }

    metodoDiscard = () => {
        //Aquí simplemente se volverá al principio de la app
        this.props.history.push('/menu');
    }


    render() {

        let { selected } = this.state;
        console.log(selected)
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            rows: 2,

            slidesPerRow: 3,
            slidesToScroll: 1,
            adaptativeHeight: false,
        };

        return (
            <div className='option-page'>
                <Nav />
                <div className="routine">
                
                    {selected.map((exercise, i) => {
                        return (
                            <div className='fakeDrag'>
                            {/* <Slider {...settings}> */}
                                <Exercise
                                    key={exercise.id+i}
                                    pos={i}
                                    id={exercise.id}
                                    img={exercise.img}
                                    name={exercise.name}
                                    intensity={exercise.intensity}
                                    metodo={this.metodoEmpty}
                                />
                                <ButtonComponent key={exercise.id} pos={i} id={exercise.id} metodo={this.metodoDelete} />
                                {/* </Slider> */}
                            </div>
                        );
                    })}
                  
                </div>
                
                <Questions metodoBreak={this.metodoBreak} metodoExerc={this.metodoExerc}/>
                <ExerciseTabs metodo={this.onAddExercise} />
                <Buttons metodoSave={this.metodoSave} selectedLength={this.state.selected.length} saved={this.state.saved} metodoDiscard={this.metodoDiscard}/>

            </div>
        )
    }
}

export default PickingPage;

