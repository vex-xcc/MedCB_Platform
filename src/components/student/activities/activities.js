//Activities 

import "./activities.css"
import React from 'react';
// import { getAllServiceInOnProgress } from '../api';
// import { getInfo } from '../login/decodeToken'

export default class Activities extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            Activities: [
            {    
                ServiceDescription : "i want to paint my room the size is 6 X 5",
                ServiceState : "Waiting",
                ServiceType : "Painter",
            },
            {
                ServiceDescription : "paint for the whole house",
                ServiceState : "Waiting",
                ServiceType : "Painter",
            },
            {
                ServiceDescription : "i want to paint my room the size is 6 X 5",
                ServiceState : "Waiting",
                ServiceType : "Painter",
            },
            ],
        };
    }

    // componentDidMount() {
    //     // get the id of curretn user
    //     let ID = getInfo().data._id

    //     // Mack API call 
    //     getAllServiceInOnProgress(ID)
    //         .then((reponse) => {
    //             this.setState({ Activities: reponse.data });
    //         })
    //         .catch((error) => {
    //         })
    // }
    render() {
        // variable to show when there no Services in the array 
        let allActivities = <h3> No Received Services.. </h3>
        // if condtion to check the array is greater than zero return and pass the data to ReceivedService components 
        if (this.state.Activities.length > 0) {
            allActivities = this.state.Activities.map((Services, index) => {
                return (
                    <li className='work'>
                        <input className='radio' id={`work${index}`} name='works' type='radio'></input>

                        <div className="relative">
                            <label htmlFor={`work${index}`} >{Services.ServiceType}</label>
                            <span className='date'>{Services.ServiceState}</span>
                            <span className='circle'></span>
                        </div>

                        <div className='contents'>
                            <p> {Services.ServiceDescription} </p>
                        </div>
                    </li>
                );
            })
        }

        return (
            <>
            <div className='allActivities'>
                <p> {`أنشطة ${this.props.type} القادمة`} </p>
            </div>

                <ul className='timeline'>
                    {allActivities}
                </ul>
            </>
        );
    }

} 
