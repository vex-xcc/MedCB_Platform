import React from 'react';
import { getAllActivityType } from '../../api';
import { getInfo } from '../../login/decodeToken'
import '../allTrainers/allTrainers.css'
export default class Culture extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      culture_activities:[],

    };
  }
  componentDidMount() {
    // Mack API call 
    getAllActivityType('Culture')
      .then((reponse) => {
        this.setState({ culture_activities: reponse.data })
      })
      .catch((error) => {
        console.log(' API error: ', error);
      })
  }

  render() {
    let allServices =   <div className="main-container">

    <div className="first-container share">
          <h1>لايوجد نشاطات متاحة</h1></div>
              </div>


    if (this.state.culture_activities.length > 0) {
      allServices = this.state.culture_activities.map((Services, index) => {
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

          <div class="row head head1">
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