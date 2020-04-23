import React from 'react';
import { getAllActivity } from '../../api';
import { getInfo } from '../../login/decodeToken'
import '../allTrainers/allTrainers.css'
export default class Sport extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      sport_activities:[],

    };
  }

  componentDidMount() {
    // Mack API call 
    getAllActivity()
      .then((reponse) => {
        console.log('reponse.data', reponse.data)
        const sportActivities = reponse.data.filter((Service) => {
          if (Service.ActivityType === 'Sport') {
            return reponse.data
          }
        });
        this.setState({ sport_activities: sportActivities })
      })
      .catch((error) => {
        console.log(' API error: ', error);
      })
  }


  render() {
    let allServices = <h3> No Services! :( </h3>

    if (this.state.sport_activities.length > 0) {
      allServices = this.state.sport_activities.map((Services, index) => {
        return (
      <div class="row">
         <div class="cell" data-title="ActivityCreator">
          {Services.ActivityCreator}
          </div>
         <div class="cell" data-title="ActivityName">
          {Services.ActivityName}
          </div>
          <div class="cell" data-title="ActivityType">
          {Services.ActivityType}
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
              منشئ النشاط
              </div>
            <div class="cell">
            اسم النشاط
              </div>  
            <div class="cell">
            نوع النشاط
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