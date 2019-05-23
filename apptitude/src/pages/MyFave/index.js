import React, { Component } from 'react';

import './index.scss';
import Nav from '../../components/Nav';
import FaveItem from '../../components/FaveItem';
import Data from '../../services/Data';
import withUser from '../../helpers/withUser';



class MyFave extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            routines: [],
            loading: true,
            routinesId: null
        }
    }

    async componentDidMount() {
        const user = this.props.userInfo;
        if (user) {
            this.setUserRoutines(user);
        }
        //console.log(this.props.userInfo, "info de usuario Component did mount");
    }

    componentDidUpdate(prevProps) {
        if (prevProps.userInfo === null && this.props.userInfo !== null) {
            const user = this.props.userInfo;
            this.setUserRoutines(user)
        }
    }

    metodoDelete = async(id) =>{
        await Data.deleteObject('routines',id);
        let {routines, routinesId}= this.state;
        let index = routinesId.indexOf(id);

        routines.splice(index,1);
        routinesId.splice(index,1);

        let user= await Data.getObjectDetail("users",this.props.userInfo.uid);
        user.myRoutines = routinesId;

        await Data.updateDetail("users",this.props.userInfo.uid,{routines:user.myRoutines});


        this.setState({routines,routinesId});
    }

    setUserRoutines = async (user) => {
        let routines = [];
        if (user.myRoutines) {
            for (let i = 0; i < user.myRoutines.length; i++) {
                //console.log(user.myRoutines[i]);
                let routine = await Data.getObjectDetail('routines', user.myRoutines[i]);
                routines.push(routine);
            }
            console.log("TCL: MyFave -> setUserRoutines -> routines", routines)
            this.setState({ user, routines, routinesId: user.myRoutines, loading: false });
        } else {
            this.setState({loading:false});
        }
    }
            

    render() {
        const { user, routines, routinesId, loading } = this.state;
        
        
        console.log("Render MyFave");
        console.log("TCL: MyFave -> render -> routines", routines)
        return (
            <div className='my-fave'>
                <Nav />
                {loading && <div>loading</div>}
                {!loading && <div>
                    <div className='faves'>My favorite routines</div>
                    {routines.length===0 && <p>There are no routines yet</p>} 
                    {routines.map((elem, i) => {
                        console.log(i);
                        return <FaveItem key={i} idRoutine={routinesId[i]} metodoDelete={this.metodoDelete} routine={elem} />
                    })}
                </div>}
            </div>
        )
    }
}

export default withUser(MyFave);