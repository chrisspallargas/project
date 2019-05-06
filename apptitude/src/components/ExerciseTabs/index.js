import React, { Component } from 'react';
import { Tabs, Nav, Content } from 'react-tiny-tabs';
import './index.scss';
import Data from '../../services/Data';
import Exercise from '../Exercise';


export default class ExerciseTabs extends Component {
    constructor(props){
        super(props);

        this.arrayArms= null;
        this.arrayAbs=null;
        this.arrayButtocks=null;
        this.arrayCardio=null;
        this.arrayLegs=null;

        this.state = {
            loading:true
        }
    }
    async componentDidMount () {
        this.arrayArms = await Data.perMuscularGroup("arms");
        this.arrayButtocks = await Data.perMuscularGroup("buttocks");
        this.arrayLegs = await Data.perMuscularGroup("legs");
        this.arrayAbs = await Data.perMuscularGroup("abs");
        this.arrayCardio = await Data.perMuscularGroup("cardio");
        this.setState({loading:false})
    }

    render() {
        const {loading} = this.state;
    
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
                            {loading && <div>loading</div>}
                            {!loading && this.arrayArms.map((exercise, i) => {
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
                                })
                            }
                        </div>
                        <div>
                            {loading && <div>loading</div>}
                            {!loading && this.arrayLegs.map((exercise, i) => {
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
                                })
                            }
                        </div>
                        <div>
                            {loading && <div>loading</div>}
                            {!loading && this.arrayButtocks.map((exercise, i) => {
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
                                })
                            }
                        </div>
                        <div>
                            {loading && <div>loading</div>}
                            {!loading && this.arrayAbs.map((exercise, i) => {
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
                                })
                            }
                        </div>
                        <div>
                            {loading && <div>loading</div>}
                            {!loading && this.arrayCardio.map((exercise, i) => {
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
                                })
                            }
                        </div>
                    </Content>
                </Tabs>
                

            </div >
        )
    }
}

