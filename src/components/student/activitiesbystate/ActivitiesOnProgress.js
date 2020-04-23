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
            //   let mId = getInfo().data._id
            let mId = "5ea1ebd46ce9fa8b98255f9c"
    getAllActivityList(mId)
      .then((reponse) => {
        console.log('reponse.data', reponse.data)
        this.setState({ reg_activities: reponse.data })
      })
      .catch((error) => {
        console.log(' API error: ', error);
      })
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
          <div class="cell" data-title="ActivityDescription">
          {Services.ActivityDescription}
          </div>
          <div class="cell" data-title="ActivityState">
          {Services.ActivityState}
          </div>
          <div class="cell" data-title="ClubName">
          {Services.ClubName}
          </div>
          <div class="cell" data-title="TargetAge">
          {Services.TargetAge}
          </div>
          <div class="cell" data-title="ActivityLocation">
          {Services.ActivityLocation}
          </div>
          <div class="cell" data-title="StartDate">
          {Services.StartDate}
          </div>
          <div class="cell" data-title="EndDate">
          {Services.EndDate}
          </div>
          <div class="cell" data-title="ActivityCreator">
          {Services.ActivityCreator}
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
            اسم الدورة
              </div>
            <div class="cell">
            نوع الدورة
              </div>
            <div class="cell">
            وصف الدورة
              </div>
            <div class="cell">
            حالة الدورة
              </div>
              <div class="cell">
              اسم النادي
              </div>
              <div class="cell">
              العمر المستهدف
              </div>
              <div class="cell">
              مكان الدورة
              </div>
              <div class="cell">
              تاريخ البدء
              </div>
              <div class="cell">
              تاريخ الانتهاء
              </div>
              <div class="cell">
              منشئ النشاط
              </div>
          </div>
          {allServices}
        </div>
</div>
    );
  }
}