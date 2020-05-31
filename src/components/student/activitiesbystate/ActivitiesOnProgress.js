import React from 'react';
import { getAllActivityList } from '../../api';
import { getInfo } from '../../login/decodeToken';
import '../../manager/allTrainers/allTrainers.css';
export default class ActivitiesOnProgress extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reg_activities:[],
    };
  }
  componentDidMount() {
    // Mack API call 
              let mId = getInfo().data._id
              getAllActivityList(mId)
      .then((reponse) => {
        this.set(reponse.data)
      })
      .catch((error) => {
        console.log(' API error: ', error);
      })
  }

  set = data =>{
    this.setState({ reg_activities: data })
  }
  render() {
    let allServices 
    if (this.state.reg_activities.length > 0) {
      allServices = this.state.reg_activities.map((Services, index) => {
        return (
      <div class="row">
         <div class="cell" data-title="ActivityName">
          {Services.ActivityName}
          </div>
          <div class="cell" data-title="ActivityType">
          {Services.ActivityType}
          </div>
          <div class="cell" data-title="Occupation">
          {Services.ActivityDescription}
          </div>
          <div class="cell" data-title="ActivityState">
          {Services.ActivityLocation}
          </div>
       
         
      </div>
        );
      })
    }
    return (
      <div class="wrapper">
        <div class="table">
          <div class="row head head1">
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
          </div>
          {allServices}
        </div>
</div>
    );
  }
}