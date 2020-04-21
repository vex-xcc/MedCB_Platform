import React from './node_modules/react';
// import { getRequestService, OnProgressService } from '../api';
// import { getInfo } from '../login/decodeToken'
import '../allTrainers/allTrainers.css'
export default class ManagerHome extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      cus_RequestServices: [
    {
        ServiceDescription : "i want to paint my room the size is 6 X 5",
        ServiceState : "Waiting",
        ServiceType : "Painter",
    },
    {
        ServiceDescription : "paint for the whole house",
        ServiceState : "Waiting",
        ServiceType : "Painter",
    },
    {
        ServiceDescription : "i want to paint my room the size is 6 X 5",
        ServiceState : "Waiting",
        ServiceType : "Painter",
    },
    ],


    };
  }

//   componentDidMount() {
//     // Mack API call 
//     let mId = getInfo().data._id
//     getRequestService(mId)
//       .then((reponse) => {
//         console.log('reponse.data', reponse.data)
//         const openServiecs = reponse.data.filter((Service) => {
//           if (Service.ServiceState === 'Open' || Service.ServiceState === 'Waiting') {
//             return reponse.data
//           }
//         });
//         this.setState({ cus_RequestServices: openServiecs })
//       })
//       .catch((error) => {
//         console.log(' API error: ', error);
//       })
//   }


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

    if (this.state.cus_RequestServices.length > 0) {
      allServices = this.state.cus_RequestServices.map((Services, index) => {
        return (
      <div class="row">
          <div class="cell" data-title="Name">
          {Services.ServiceType}
          </div>
          <div class="cell" data-title="Age">
          {Services.ServiceState}
          </div>
          <div class="cell" data-title="Occupation">
          {Services.ServiceDescription}
          </div>
          <div class="cell" data-title="Location">
          {Services.ServiceState}
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

          <div class="row head">
            <div class="cell">
              activity type
              </div>
            <div class="cell">
              trainer name
              </div>
            <div class="cell">
              location
              </div>
            <div class="cell">
              Status
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