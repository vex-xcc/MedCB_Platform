import React from 'react';
import { getAllActivityFinshedList } from '../../api';
import { getInfo } from '../../login/decodeToken';
import '../../manager/allTrainers/allTrainers.css';
export default class ActivitiesFinshed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      finished_activities:[],
    };
  }
  componentDidMount() {
    // Mack API call 
                  let mId = getInfo().data._id

    getAllActivityFinshedList(mId)
      .then((reponse) => {
        let data = reponse.data
        this.setState({ finished_activities: data })
      })
      .catch((error) => {
        console.log(' API error: ', error);
      })
  }

  set = data =>{
    this.setState({ finished_activities: data })
  }


  render() {
    let allServices 
    if (this.state.finished_activities.length > 0) {
      allServices = this.state.finished_activities.map((Services, index) => {
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
          </div>
          {allServices}
        </div>
</div>
    );
  }
}