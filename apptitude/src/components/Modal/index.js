import React from 'react';
import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css';


import Questions from '../Questions';
import MuscularGroupOptions from '../MuscularGroupOptions';
import './index.scss';

export default class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            breakTime: 10,
            exerciseTime: 10,
            muscularGroups:[]
        };
    }

    show = () => {
        this.setState({ visible: true });
    }

    hide = () => {
        this.setState({ visible: false });
    }

    metodoBreak = (value) => {
        this.setState({ breakTime: value });
    }

    metodoExerc = (value) => {
        this.setState({ exerciseTime: value });
    }

    onMuscular = (event) => {
        
    }

    checkedGroup = (group) => {
        let {muscularGroups} = this.state;
        let newMuscularGroups = muscularGroups.slice();
        if(!newMuscularGroups.includes(group)){
            newMuscularGroups.push(group);
        } else {
            let index=newMuscularGroups.indexOf(group)
            newMuscularGroups.splice(index,1);
        }

        console.log(newMuscularGroups);
        this.setState({muscularGroups:newMuscularGroups});
    }

    render() {
        return (
            <div>
                <div className='linkCreate'><button type='button'
                    className='buttCreate'
                    onClick={this.show}>
                    Make it Random!
                        </button></div>

                <Rodal customStyles={{backgroundColor:"#E6E6E6", borderRadius:'25px'}} width={300} height={300} visible={this.state.visible} onClose={this.hide}>
                    <div>
                        <Questions metodoBreak={this.metodoBreak} metodoExerc={this.metodoExerc} />
                        <MuscularGroupOptions checkedGroup={this.checkedGroup}/>
                        <button type="button" value="Ok!" className='form-ok-butt' onClick={this.onMuscular}>Ok!</button>
                    </div>
                </Rodal>
            </div>
        )
    }
}