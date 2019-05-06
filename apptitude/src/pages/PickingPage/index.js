import React, { Component } from 'react';
import Nav from '../../components/Nav';
import Questions from '../../components/Questions';
import ExerciseTabs from '../../components/ExerciseTabs';
import Exercise from '../../components/Exercise';
import Data from '../../services/Data';
import ButtonComponent from '../../components/ButtonComponent';
import Buttons from '../../components/Buttons';
import './index.scss';


class PickingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: [],
            breakTime: 10,
            exerciseTime: 10
        }
    }



    // Modificar el state sacando el elemento id del array de seleccionados
    metodoDelete = (id, pos) => {
        // console.log("Delete " + id);
        let { selected } = this.state;
        let updatedSelected = selected.slice();
        // console.log(selected);

        updatedSelected.splice(pos, 1);

        // console.log(updatedSelected);
        this.setState({ selected: updatedSelected });
    }

    metodoEmpty = () =>{

    }

    //Añadir el ejercicio con id a seleccionados
    onAddExercise = async(id, pos) => {
        
        // let data = new Data();
        let exerciseId = await Data.getObjectDetail('exercises',id);
        // console.log(exerciseId.img +" "+exerciseId.name+" "+exerciseId.intensity);
        let updatedSelected = this.state.selected;
        updatedSelected.push({ id: exerciseId.id, img: exerciseId.img, name: exerciseId.name, intensity: exerciseId.intensity })
        // console.log('se está añadiendo: '+ exerciseId + 'esta es la id'+ id)
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

    render() {
        let { selected } = this.state;
        return (
            <div className='option-page'>
                <Nav />
                <div className="routine">
                    {selected.map((exercise, i) => {
                        return (
                            <div className='fakeDrag'>
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
                            </div>
                        );
                    })}
                </div>
                <Questions metodoBreak={this.metodoBreak} metodoExerc={this.metodoExerc}/>
                <ExerciseTabs metodo={this.onAddExercise} />
                <Buttons />

            </div>
        )
    }
}

export default PickingPage;

