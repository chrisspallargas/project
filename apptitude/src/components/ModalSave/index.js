import React from 'react';
import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css';

import './index.scss';

export default class ModalSave extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    show = () => {
        this.setState({ visible: true });
        console.log('me muestro');
    }

    hide = () => {
        this.setState({ visible: false });
        console.log('me escondo');
    }

    render() {
        return (
            <div>

                <button className='butt' type='button' onClick={this.show}>Save</button>
                <Rodal customStyles={{backgroundColor:"#E6E6E6", borderRadius:'25px'}} width={250} height={250} visible={this.state.visible} onClose={this.hide}>
                    <div className='save-routine'>
                        <div>Routine Name:</div>
                        <input type='placeholder' className='placeholder' />
                        <button type="button" value="Ok!" className='save-butt' onClick={this.onSave}>Save</button>
                    </div>
                </Rodal>
            </div>
        )
    }
}