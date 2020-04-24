import React from 'react';
import "./activities.css"
import { getAllActivityType , StudentsRegisteredInActivity } from '../../api';
import { getInfo } from '../../login/decodeToken'
import OneActivitie from "./OneActivitie"
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
          let studentID = getInfo().data._id
        // Make an API Call to register a service
        console.log( `studentID ====> ${studentID} `)
        console.log( `Make an API Call to register a service the ===> ${activitieID} `)
        StudentsRegisteredInActivity( studentID ,activitieID)
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

    render() {

        // variable to show when there no Services in the array 
        let allActivities = <h3> لايوجد حاليا </h3>
        // if condtion to check the array is greater than zero return and pass the data to ReceivedService components 
        if (this.state.Activities.length > 0) {
            allActivities = this.state.Activities.map((activitie, index) => {
                return (
                    <OneActivitie
                    id={activitie._id}
                    ActivityName={activitie.ActivityName}
                    ClubName={activitie.ClubName}
                    ActivityDescription={activitie.ActivityDescription}
                    registerOnActivitie={this.register}
                    index={index} /> 
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
