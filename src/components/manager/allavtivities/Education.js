import React from 'react';
import { getRequestService, OnProgressService,getAllActivity } from '../../api';
import { getInfo } from '../../login/decodeToken'
import '../allTrainers/allTrainers.css'
export default class Education extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      education_activities:[],

    };
  }

  componentDidMount() {
    getAllActivity()
      .then((reponse) => {
        console.log('reponse.data', reponse.data)
        const educationActivities = reponse.data.filter((Service) => {
          if (Service.ActivityType === 'Education' ) {
            return reponse.data
          }
        });
        this.setState({ education_activities: educationActivities })
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

    if (this.state.education_activities.length > 0) {
      allServices = this.state.education_activities.map((Services, index) => {
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
        <div class="wrapper">

        <div class="table">

          <div class="row head2">
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


      //  <div className="allServices">
      //      {allServices}
      // </div>



    );
  }

}