import React from 'react';
import { getAllActivityType } from '../../api';
import { getInfo } from '../../login/decodeToken'
import '../allTrainers/allTrainers.css'
export default class Entertainment extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
     entertainment_activities:[],

    };
  }


  componentDidMount() {
    // Mack API call 
    getAllActivityType('Entertainment')
      .then((reponse) => {
        this.setState({ entertainment_activities: reponse.data })
      })
      .catch((error) => {
        console.log(' API error: ', error);
      })
  }

  render() {
    let allServices =  <h1>لايوجد برمج متاحة</h1>

    if (this.state.entertainment_activities.length > 0) {
      allServices = this.state.entertainment_activities.map((Services, index) => {
        return (
      <div class="row">
        <div class="cell" data-title="ActivityCreator">
        {Services.ActivityCreator.FullName}
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

          <div class="row head head3">
          <div class="cell">
              منشئ البرنامج
              </div>
            <div class="cell">
            اسم البرنامج
              </div>  
            <div class="cell">
              المجال 
              </div>
            <div class="cell">
            حالة البرنامج
              </div>
          </div>
          {allServices}
        </div>

</div>


    



    );
  }

}