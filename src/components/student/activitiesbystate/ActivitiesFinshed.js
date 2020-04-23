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
        console.log('reponse.data', reponse.data)
        this.setState({ finished_activities: reponse.data })
      })
      .catch((error) => {
        console.log(' API error: ', error);
      })
  }
  render() {
    let allServices = <h3> No Services! :( </h3>
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
          {Services.ActivityState}
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
            اسم النشاط
              </div>
            <div class="cell">
            نوع النشاط
              </div>
            <div class="cell">
            وصف النشاط
              </div>
            <div class="cell">
            حالة النشاط
              </div>
          </div>
          {allServices}
        </div>
</div>
    );
  }
}