import React, { Component } from 'react';
import { Tabs, Nav, Content } from 'react-tiny-tabs';
import './index.scss';
import Data from '../../services/Data';
import Exercise from '../Exercise';


export default class ExerciseTabs extends Component {

    render() {
        // let arraEjer = [{ img: 'Imagen1', eje: 'Ejercicio1', int: 'intensidad1' },
        // { img: 'Imagen2', eje: 'Ejercicio2', int: 'intensidad2' },
        // { img: 'Imagen3', eje: 'Ejercicio3', int: 'intensidad3' },
        // { img: 'Imagen4', eje: 'Ejercicio4', int: 'intensidad4' },
        // { img: 'Imagen5', eje: 'Ejercicio5', int: 'intensidad5' }];
        let data = new Data();
        let arrayArms = data.perMuscularGroup("arms");
        let arrayButtocks = data.perMuscularGroup("buttocks");
        let arrayLegs = data.perMuscularGroup("legs");
        let arrayAbs = data.perMuscularGroup("Abs");
        let arrayCardio = data.perMuscularGroup("Cardio");



        return (
            <div className='exercice-tabs'>
                <p>Choose the exercices you want:</p>
                <Tabs className="theme-default">
                    <Nav>
                        <div className='muscular'>Arms</div>
                        <div className='muscular'>Legs</div>
                        <div className='muscular'>Buttocks</div>
                        <div className='muscular'>Abs</div>
                        <div className='muscular'>Cardio</div>
                    </Nav>
                    <Content className='content'>
                        <div>
                            {arrayArms.map((exercise, i) => {
                                return (
                                    <Exercise 
                                    key={i}
                                    pos={i}
                                    id={exercise.id} 
                                    img={exercise.img} 
                                    name={exercise.name} 
                                    intensity={exercise.intensity} 
                                    metodo={this.props.metodo} 
                                    />
                                );
                            })}
                        </div>
                        <div>
                            {arrayLegs.map((exercise, i) => {
                                return (
                                    <Exercise 
                                    key={i}
                                    pos={i}
                                    id={exercise.id} 
                                    img={exercise.img} 
                                    name={exercise.name} 
                                    intensity={exercise.intensity} 
                                    metodo={this.props.metodo} 
                                    />
                                );
                            })}
                        </div>
                        <div>
                            {arrayButtocks.map((exercise, i) => {
                                return (
                                    <Exercise 
                                    key={i}
                                    pos={i}
                                    id={exercise.id} 
                                    img={exercise.img} 
                                    name={exercise.name} 
                                    intensity={exercise.intensity} 
                                    metodo={this.props.metodo} 
                                    />
                                );
                            })}
                        </div>
                        <div>
                        {arrayAbs.map((exercise, i) => {
                                return (
                                    <Exercise 
                                    key={i}
                                    pos={i}
                                    id={exercise.id} 
                                    img={exercise.img} 
                                    name={exercise.name} 
                                    intensity={exercise.intensity} 
                                    metodo={this.props.metodo} 
                                    />
                                );
                            })}
                        </div>
                        <div>
                        {arrayCardio.map((exercise, i) => {
                                return (
                                    <Exercise 
                                    key={i}
                                    pos={i}
                                    id={exercise.id} 
                                    img={exercise.img} 
                                    name={exercise.name} 
                                    intensity={exercise.intensity} 
                                    metodo={this.props.metodo} 
                                    />
                                );
                            })}
                        </div>
                    </Content>
                </Tabs>

            </div >
        )
    }
}
