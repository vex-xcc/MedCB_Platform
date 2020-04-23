import React from 'react';
import "./activities.css"
import { getAllActivityType , StudentsRegisteredInActivity } from '../../api';
// import { getInfo } from '../login/decodeToken'

export default class Activities extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            Activities: [ ],
        };
    }

    componentDidMount() {
        // get the id of curretn user
        // let ID = getInfo().data._id

        // Mack API call 
        getAllActivityType(this.props.ActivityType)
            .then((reponse) => {
                this.setState({ Activities: reponse.data });
            })
            .catch((error) => {
            })
    }



    register = (activitieID) => {
        //   // get the id of curretn user
        //   let studentID = getInfo().data._id

        // Make an API Call to register a service

        console.log( `Make an API Call to register a service the ${activitieID} `)
        // StudentsRegisteredInActivity(activitieID , studentID )
           .then((res) => {
               const Activities = this.state.Activities.filter((Activities) => {
                   return Activities._id !== activitieID; 
               });
            //    Swal.fire(`The student registerd`,"",'success')
               this.setState({ Activities});
           })
           .catch((err) => {
           })
   }

    registerClick = (e) => {
        // e.preventDefault();
        console.log( `the student register Click `)
        this.register(this.props.id);
      }

    render() {

        // variable to show when there no Services in the array 
        let allActivities = <h3> لايوجد حاليا </h3>
        // if condtion to check the array is greater than zero return and pass the data to ReceivedService components 
        if (this.state.Activities.length > 0) {
            allActivities = this.state.Activities.map((activitie, index) => {
                return (
                    <li className='work'>
                        <input className='radio' id={`work${index}`} name='works' type='radio'></input>

                        <div className="relative">
                            <label htmlFor={`work${index}`} >{activitie.ActivityName}</label>
                            <span className='date'>{activitie.StartDate}</span>
                            <span className='circle'></span>
                        </div>

                        <div className='contents'>
                            <p> {activitie.ClubName} </p>
                            <p> {activitie.ActivityDescription} </p>
                            <p onClick={this.registerClick(activitie._id)}> اشتراك</p>
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
