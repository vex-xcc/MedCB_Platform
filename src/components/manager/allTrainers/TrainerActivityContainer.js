import React, { Component } from 'react'
import TrainerActivity from './TrainerActivity'
import { getAllActivityListInstructor, getAllActivityFinshedListInstructor } from '../../api';

export default class TrainerActivityContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      reg_activities: [],
      finished_activities: [],
    };
  }
  componentDidMount() {
    this.AllActivityFinshedList()
    this.AllActivityList()
  }


  // ---------------------------------------------------
  AllActivityFinshedList = () => {
    // Mack API call 
    let mId = localStorage.getItem('currentUserInfo')
    if (mId !== null) {
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
  }
  // ---------------------------------------------------
  AllActivityList = () => {
    let mId = localStorage.getItem('currentUserInfo')
    if (mId !== null) {
      getAllActivityListInstructor(mId)
        .then((reponse) => {
          let data = reponse.data
          this.setState({ reg_activities: data })
        })
        .catch((error) => {
          console.log(' API error: ', error);
        })
    }
  }

  render() {
    let allReg_activities

    if (this.state.reg_activities.length > 0) {
      allReg_activities = this.state.reg_activities.map((activity, index) => {
        return (
          <TrainerActivity
            id={activity._id}
            ActivityName={activity.ActivityName}
            ActivityLocation={activity.ActivityLocation}
            ActivityDescription={activity.ActivityDescription}
            ActivityState={activity.ActivityState}
            AllActivityFinshedList={this.AllActivityFinshedList}
            key={index} />
        );
      })
    }
    let allFinished_activities
    if (this.state.finished_activities.length > 0) {
      allFinished_activities = this.state.finished_activities.map((activity, index) => {
        return (
          <div className="row">

            <div className="cell" data-title="ActivityName">
              {activity.ActivityName}
            </div>
            <div className="cell" data-title="ActivityDescription">
              {activity.ActivityDescription}
            </div>
            <div className="cell" data-title="ActivityLocation">
              {activity.ActivityLocation}
            </div>
            <div className="cell" data-title="ActivityState">
              {activity.ActivityState}
            </div>

          </div>

        );
      })
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

    );
  }

}