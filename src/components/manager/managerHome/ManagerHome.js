import React from 'react';
import { getRequestService, OnProgressService,getAllActivity } from '../../api';
import { getInfo } from '../../login/decodeToken'
import '../allTrainers/allTrainers.css'
import Sport from '../allavtivities/ Sport';
import Culture from '../allavtivities/Culture';
import Education from '../allavtivities/Education';
import Entertainment from '../allavtivities/Entertainment';
export default class ManagerHome extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      act_activities:[],
     
    };
  }



// componentDidMount() {
//   // get the id of curretn user
//   let ID = getInfo().data._id

//   // Mack API call 
//   getAllActivity(ID)
//       .then((reponse) => {
//           this.setState({ act_activities: reponse.data });
//       })
//       .catch((error) => {
//       })
// }
  render() {
    let allServices = <h3> No Services! :( </h3>

    if (this.state.act_activities.length > 0) {
      allServices = this.state.act_activities.map((Services, index) => {
        return (
      <div class="row">
          <div class="cell" data-title="Name">
          {Services.ActivityName}
          </div>
          <div class="cell" data-title="Age">
          {Services.ActivityType}
          </div>
          <div class="cell" data-title="Occupation">
          {Services.ActivityDescription}
          </div>
          <div class="cell" data-title="Location">
          {Services.ActivityState}
          </div>
          <div class="cell" data-title="Location">
          {Services.ClubName}
          </div>
          <div class="cell" data-title="Location">
          {Services.TargetAge}
          </div>
          <div class="cell" data-title="Location">
          {Services.ActivityLocation}
          </div>
          <div class="cell" data-title="Location">
          {Services.StartDate}
          </div>
          <div class="cell" data-title="Location">
          {Services.EndDate}
          </div>
          <div class="cell" data-title="Location">
          {Services.ActivityCreator}
          </div>
      </div>
  
          // <RequestService
          //   id={Services._id}
          //   ServiceType={Services.ServiceType}
          //   ServiceState={Services.ServiceState}
          //   ServiceDescription={Services.ServiceDescription}
          //   AllPrice={Services.AllPrice}
          //   workerId={Services.AllPrice[0]}
          //   ProgressService={this.changeStateToProgressService}
          //   key={index} />
        );
      })
    }

    return (
     <div>
       <Sport/>
       <Culture/>
       <Education/>
       <Entertainment/>
     </div>

      //  <div className="allServices">
      //      {allServices}
      // </div>



    );
  }

}