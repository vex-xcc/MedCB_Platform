import React from 'react';
// import { getRequestService, OnProgressService,getAllActivity } from '../../api';
// import { getInfo } from '../../login/decodeToken'
import '../../manager/allTrainers/allTrainers.css'
export default class TrainerHome extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      sport_activities:[],

    };
  }

  componentDidMount() {
    // Mack API call 
    // getAllActivity()
    //   .then((reponse) => {
    //     console.log('reponse.data', reponse.data)
    //     const sportActivities = reponse.data.filter((Service) => {
    //       if (Service.ActivityType === 'Sport') {
    //         return reponse.data
    //       }
    //     });
    //     this.setState({ sport_activities: sportActivities })
    //   })
    //   .catch((error) => {
    //     console.log(' API error: ', error);
    //   })
  }


//   changeStateToProgressService = (id) => {
//     // Make an API Call to onprogress a service
//     OnProgressService(id)
//     console.log(`Make an API Call to onprogress a service the ${id} `)

//     const newList = this.state.cus_RequestServices.filter((Service) => {
//       return Service._id !== id;
//     })
//     this.setState({ cus_RequestServices: newList });

//   }

  render() {
    // let allServices = <h3> No Services! :( </h3>

    // if (this.state.sport_activities.length > 0) {
    //   allServices = this.state.sport_activities.map((Services, index) => {
    //     return (
    //   <div class="row">
    //      <div class="cell" data-title="ActivityName">
    //       {Services.ActivityName}
    //       </div>
    //       <div class="cell" data-title="ActivityType">
    //       {Services.ActivityType}
    //       </div>
    //       <div class="cell" data-title="ActivityDescription">
    //       {Services.ActivityDescription}
    //       </div>
    //       <div class="cell" data-title="ActivityState">
    //       {Services.ActivityState}
    //       </div>
    //       <div class="cell" data-title="ClubName">
    //       {Services.ClubName}
    //       </div>
    //       <div class="cell" data-title="TargetAge">
    //       {Services.TargetAge}
    //       </div>
    //       <div class="cell" data-title="ActivityLocation">
    //       {Services.ActivityLocation}
    //       </div>
    //       <div class="cell" data-title="StartDate">
    //       {Services.StartDate}
    //       </div>
    //       <div class="cell" data-title="EndDate">
    //       {Services.EndDate}
    //       </div>
    //       <div class="cell" data-title="ActivityCreator">
    //       {Services.ActivityCreator}
    //       </div>
    //   </div>

    //     );
    //   })
    // }

    return (
<div class="wrapper">


<div class="table">
    
    <div class="row header green">
      <div class="cell">
        Product
      </div>
      <div class="cell">
        Unit Price
      </div>
      <div class="cell">
        Quantity
      </div>
      <div class="cell">
        Date Sold
      </div>
      <div class="cell">
        Status
      </div>
    </div>
    
    
    <div class="row">
      <div class="cell" data-title="Product">
        27" Apple Thunderbolt displays
      </div>
      <div class="cell" data-title="Unit Price">
        $1000
      </div>
      <div class="cell" data-title="Quantity">
        25
      </div>
      <div class="cell" data-title="Date Sold">
        02/10/2014
      </div>
      <div class="cell" data-title="Status">
        Delivered
      </div>
    </div>
    

    
  </div>



  <div class="table">
    
    <div class="row header">
      <div class="cell">
        Name
      </div>
      <div class="cell">
        Age
      </div>
      <div class="cell">
        Occupation
      </div>
      <div class="cell">
        Location
      </div>
    </div>
    
    <div class="row">
      <div class="cell" data-title="Name">
        Luke Peters
      </div>
      <div class="cell" data-title="Age">
        25
      </div>
      <div class="cell" data-title="Occupation">
        Freelance Web Developer
      </div>
      <div class="cell" data-title="Location">
        Brookline, MA
      </div>
    </div>
 
  </div>
    
</div>

    );
  }

}