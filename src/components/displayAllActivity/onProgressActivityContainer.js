/* eslint-disable no-lone-blocks */
import React from 'react'
import { getAllActivityListInstructor, getAllActivityList,CheckExpired} from '../api';
import { getInfo } from '../login/decodeToken'
export default class onProgressActivityContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reg_activities: [],
      isInstructor: getInfo().data.InstructorRole === "Instructors",
      isManager:getInfo().data.InstructorRole === "Manager",
      mId : this.isInstructor ? getInfo().data._id : localStorage.getItem('currentUserInfo')
      }
    };
  
  componentDidMount() {
    CheckExpired()
    if (this.state.isInstructor === true || this.state.isManager === true) {
      console.log(` {{{finishedActivityContainer}}}  ${this.state.mId }`)
      this.AllActivityList()
    }else if(!(this.state.isInstructor)  && !(this.state.isManager)){
      this.StudentsRegisteredInActivity()
    }
  }

  // ---------------------------------------------------
  AllActivityList = () => {
    // Mack API call 

    let mId = null
    {this.state.isInstructor ? mId = getInfo().data._id : mId = localStorage.getItem('currentUserInfo')}
    
    if (mId !== null) {
    getAllActivityListInstructor(mId)
      .then((repose) => {
        let data = repose.data
        console.log(` {{{finishedActivityContainer}}}  ${this.state.mId }`)
        this.setState({ reg_activities: data })
      })
      .catch((error) => {
        console.log(' API error: ', error);
      })
    
  }
}

  //--------------------------------------------------------
  StudentsRegisteredInActivity = () => {
    let mId = getInfo().data._id
    if(mId !== null){
    getAllActivityList(mId)
      .then((repose) => {
        let data = repose.data
        this.setState({ reg_activities: data })
      })
      .catch((error) => {
        console.log(' API error: ', error);
      })
  }
}

  render() {

    console.log(this.state.mId)
    console.log("1-===="+this.state.isManager)
    console.log("2-====="+this.state.isInstructor +" == "+localStorage.getItem('currentUserInfo'))

    let dateFormat = require('dateformat');
    let allReg_activities
    if (this.state.reg_activities.length > 0) {
      allReg_activities = this.state.reg_activities.map((activities, index) => {
        return (
          <div className="row">
            <div class="cell" data-title="ActivityName">
              {activities.ActivityName}
            </div>
            <div class="cell" data-title="ActivityType">
              {activities.ActivityType}
            </div>
            <div class="cell" data-title="Occupation">
              {activities.ActivityDescription}
            </div>
            <div class="cell" data-title="ActivityState">
              {activities.ActivityLocation}
            </div>
            <div className="cell" data-title="StartDate">
            {dateFormat(activities.StartDate, "h:MM  m/d/yy")}
            </div>
            <div className="cell" data-title="EndDate">
            { dateFormat(activities.EndDate, "h:MM  m/d/yy")}
            </div>
          </div>
          
        );
      })
    }
    return (
      <div className="wrapper">
        <div className="table">
          <div className="row head1">
            <div className="cell">
              اسم البرنامج
                 </div>
            <div className="cell">
              المجال
                 </div>
            <div className="cell">
              وصف البرنامج
                 </div>
            <div className="cell">
              موقع البرنامج
                 </div>
            <div className="cell">
              من
            </div>
            <div className="cell">
              الى
         </div>
          </div>
          {allReg_activities}
        </div>
      </div>


    );

  }
}