import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

export default class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

   

    render() {
        return (
            <div>
                <div className='linkCreate'>
                    <Link to={'/random-page'}>
                        <button type='button'
                            className='buttCreate'
                            onClick={this.show}>
                            Make it Random!
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}