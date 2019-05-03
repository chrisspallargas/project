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
            selected: []
            // [{ img: 'Imagen1', eje: 'Ejercicio1', int: 'intensidad1' },
            // { img: 'Imagen2', eje: 'Ejercicio2', int: 'intensidad2' },
            // { img: 'Imagen3', eje: 'Ejercicio3', int: 'intensidad3' },
            // { img: 'Imagen4', eje: 'Ejercicio4', int: 'intensidad4' },
            // { img: 'Imagen5', eje: 'Ejercicio5', int: 'intensidad5' }]
        }
    }

    // Modificar el state sacando el elemento id del array de seleccionados
    metodoDelete = (id, pos) => {
        console.log("Delete " + id);
        let { selected } = this.state;
        let updatedSelected = selected.slice();
        console.log(selected);

        updatedSelected.splice(pos, 1);

        console.log(updatedSelected);
        this.setState({ selected: updatedSelected });
    }

    //Añadir el ejercicio con id a seleccionados
    onAddExercise = (id, pos) => {
        let data = new Data();
        let exerciseId = data.getExercise(id);
        // console.log(exerciseId);
        // console.log(exerciseId.img +" "+exerciseId.name+" "+exerciseId.intensity);
        let updatedSelected = this.state.selected;
        updatedSelected.push({ id: exerciseId.id, img: exerciseId.img, name: exerciseId.name, intensity: exerciseId.intensity })
        // console.log('se está añadiendo: '+ exerciseId + 'esta es la id'+ id)
        this.setState({ selected: updatedSelected });
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
                <Questions />
                <ExerciseTabs metodo={this.onAddExercise} />
                <Buttons />

            </div>
        )
    }
}

export default PickingPage;

