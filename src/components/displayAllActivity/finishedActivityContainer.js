/* eslint-disable no-lone-blocks */
  import React from 'react'
  import {  getAllActivityFinishedListInstructor ,getAllActivityFinishedList} from '../api';
  import { getInfo } from '../login/decodeToken'
  
  export default class finishedActivityContainer extends  React.Component  {
        constructor(props) {
          super(props)
          this.state = {
            finished_activities: [],
            isInstructor: getInfo().data.InstructorRole === "Instructors",
            isManager:getInfo().data.InstructorRole === "Manager",
          };
        }
        componentDidMount() {
          if(this.state.isInstructor || this.state.isManager){
          this.AllActivityFinishedList()
          }else if(! this.state.isInstructor  && ! this.state.isManager){
          this.getAllActivityFinishedList()
          }
        }
        // ---------------------------------------------------
        AllActivityFinishedList = () => {
          // Mack API call 
          let mId = null
          {this.state.isInstructor ? mId = getInfo().data._id : mId = localStorage.getItem('currentUserInfo')}
          if (mId !== null) {
            getAllActivityFinishedListInstructor(mId)
              .then((repose) => {
                let data = repose.data
                this.setState({ finished_activities: data })
              })
              .catch((error) => {
                console.log(' API error: ', error);
              })
          }
        }
      
      //-------------------------------------------------------
      getAllActivityFinishedList = () =>{
      let mId = getInfo().data._id
      if (mId !== null) {
      getAllActivityFinishedList(mId)
      .then((repose) => {
        let data = repose.data
        this.setState({ finished_activities: data })
      })
      .catch((error) => {
        console.log(' API error: ', error);
      })
    }
      }
       render() {
          let allFinished_activities
          console.log(this.state.isManager)
          var dateFormat = require('dateformat');
          if (this.state.finished_activities.length > 0 ) { 
                allFinished_activities = this.state.finished_activities.map((activities, index) => {
                  return (
                <div class="row">
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
                <div class="wrapper">
                  <div class="table">
                    <div class="row head">
                    <div class="cell">
                      اسم البرنامج
                        </div>
                      <div class="cell">
                      المجال
                        </div>
                      <div class="cell">
                      وصف البرنامج
                        </div>
                      <div class="cell">
                      موقع البرنامج
                        </div>
                        <div className="cell">
                          من
                        </div>
                      <div className="cell">
                        الى
                      </div>
                    </div>
                    {allFinished_activities}
                  </div>
          </div>
      
      );
        }
      }