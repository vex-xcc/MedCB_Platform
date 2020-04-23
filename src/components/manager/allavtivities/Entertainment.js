import React from 'react';
import { getRequestService, OnProgressService,getAllActivity } from '../../api';
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
    getAllActivity()
      .then((reponse) => {
        console.log('reponse.data', reponse.data)
        const entertainmentActivities = reponse.data.filter((Service) => {
          if (Service.ActivityType === 'Entertainment' ) {
            return reponse.data
          }
        });
        this.setState({ entertainment_activities: entertainmentActivities })
      })
      .catch((error) => {
        console.log(' API error: ', error);
      })
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
    let allServices = <h3> No Services! :( </h3>

    if (this.state.entertainment_activities.length > 0) {
      allServices = this.state.entertainment_activities.map((Services, index) => {
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

          <div class="row head head3">
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