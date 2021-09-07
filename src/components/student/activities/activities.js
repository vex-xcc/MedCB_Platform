import React from 'react';
import "./activities.css"
import { getAllActivityType , StudentsRegisteredInActivity } from '../../api';
import { getInfo } from '../../login/decodeToken'
import OneActivitie from "./OneActivitie"
import Swal from "sweetalert2";

export default class Activities extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Activities: [],
        };
    }

    componentDidMount() {
        // Mack API call 
        getAllActivityType(this.props.ActivityType)
            .then((reponse) => {
                this.setState({ Activities: reponse.data });
            })
            .catch((error) => {
            })
    }

    Home = () =>{
        this.props.tog()
      }



    register = (activitieID) => {
        //   // get the id of curretn user
          let studentID = getInfo().data._id
        // Make an API Call to register a service
        StudentsRegisteredInActivity( studentID ,activitieID)
           .then((res) => {
               const Activities = this.state.Activities.filter((Activities) => {
                   return Activities._id !== activitieID; 
               });               
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
                    location={activitie.ActivityLocation}
                    registerOnActivitie={this.register}
                    tog={this.togglehandler}
                    index={index} /> 
                );
            })
        }
        return (
            <>
            <div className='allActivities'>
           <div className="pointer" > <i onClick={this.Home} className="material-icons"> arrow_back </i></div>
                <p> {` ${this.props.type} `} </p>
            </div>

                <ul className='timeline'>
                    {allActivities}
                </ul>
            </>
        );
    }

} 
