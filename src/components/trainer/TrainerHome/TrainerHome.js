import React from 'react';
import { getAllActivityListInstructor, getAllActivityFinshedListInstructor , FinishedActivities} from '../../api';
import { getInfo } from '../../login/decodeToken'
import FinishedOneActivities from "./FinishedOneActivities"
import '../../manager/allTrainers/allTrainers.css'
import Swal from "sweetalert2";

export default class TrainerHome extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      reg_activities:[],
      finished_activities:[],

    };
  }
// ---------------------------------------------------
  componentDidMount() {

    this.AllActivityFinshedList()
    this.AllActivityList()

  }
// ---------------------------------------------------
  AllActivityFinshedList = () =>{
          // Mack API call 
                  let mId = getInfo().data._id
                // let mId = "5ea1ebe66ce9fa8b98255f9d";

      getAllActivityFinshedListInstructor(mId)
      .then((reponse) => {
        let data = reponse.data
        this.setState({ finished_activities: data })
        // this.set(reponse.data)
      })
      .catch((error) => {
        console.log(' API error: ', error);
      })
  }
// ---------------------------------------------------
  AllActivityList = () =>{
      // Mack API call 
              let mId = getInfo().data._id
            // let mId = "5ea1ebe66ce9fa8b98255f9d"
    getAllActivityListInstructor(mId)
      .then((reponse) => {
        this.set(reponse.data)
      })
      .catch((error) => {
        console.log(' API error: ', error);
      })
  }
// ---------------------------------------------------
  set = data =>{
    this.setState({ reg_activities: data })
  }

  
  changeStateToFinished = (activitieID) => {
    //   // get the id of curretn user
      let studentID = getInfo().data._id
    // Make an API Call to register a service
    FinishedActivities(activitieID)
       .then((res) => {
           const reg_activities = this.state.reg_activities.filter((reg_activities) => {
               return reg_activities._id !== activitieID; 
           });
           Swal.fire(` ${activitieID.ActivityName} تم انهاء النشاط `, "", 'success');
           this.setState({ reg_activities});
       })
       .catch((err) => {
       })
}

  render() {
    let allReg_activities 

    if (this.state.reg_activities.length > 0) {
      allReg_activities = this.state.reg_activities.map((activitie, index) => {
        return (
          <FinishedOneActivities
          id={activitie._id}
          ActivityName={activitie.ActivityName}
          ActivityLocation={activitie.ActivityLocation}
          ActivityDescription={activitie.ActivityDescription}
          ActivityState={activitie.ActivityState}
          changeStateToFinished={this.changeStateToFinished}
          AllActivityFinshedList={this.AllActivityFinshedList}
          index={index} /> 
        );})      
    }

    let allFinished_activities 
    if (this.state.finished_activities.length > 0) {
      allFinished_activities = this.state.finished_activities.map((activitie, index) => {
        return (
      <div className="row">

         <div className="cell" data-title="ActivityName">
          {activitie.ActivityName}
          </div>
          <div className="cell" data-title="ActivityDescription">
          {activitie.ActivityDescription}
          </div>
          <div className="cell" data-title="ActivityLocation">
          {activitie.ActivityLocation}
          </div>
          <div className="cell" data-title="ActivityState">
          {activitie.ActivityState}
          </div>

      </div>

        );})      
    }

    return (
<div className="wrapper">


<div className="table">
    
    <div className="row head head1">
      <div className="cell">
        اسم الفعالية
      </div>
      <div className="cell">
        وصف الفعالية
      </div>
      <div className="cell">
        مكان الفعالية
      </div>
      <div className="cell">
        الحالة
      </div>
      <div className="cell">
        إنهاء الفعالية
      </div>
    </div>
    
    {allReg_activities}
  </div>



  <div className="table">
  <div className="row head"> 

  <div className="cell">
        اسم الفعالية
      </div>
      <div className="cell">
        وصف الفعالية
      </div>
      <div className="cell">
        مكان الفعالية
      </div>
      <div className="cell">
        الحالة
      </div>
  </div>
    
    {allFinished_activities}
</div> 
</div>

    );}

}