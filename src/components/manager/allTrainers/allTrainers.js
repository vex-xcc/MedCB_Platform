import React from 'react';
import "./allTrainers.css"
import { getRequestService, getAllinstructor } from '../../api';
// import { getInfo } from '../login/decodeToken'
export default class allTrainers extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      all_instroctor: [],
    };
  }

  componentDidMount() {
    getAllinstructor()
      .then((reponse) => {
        console.log('reponse.data', reponse.data)
       
        this.setState({ all_instroctor:reponse.data })
      })
      .catch((error) => {
        console.log(' API error: ', error);
      })
  }


  // changeStateToProgressService = (id) => {
  //   // Make an API Call to onprogress a service
  //   OnProgressService(id)
  //   console.log(`Make an API Call to onprogress a service the ${id} `)

  //   const newList = this.state.cus_RequestServices.filter((Service) => {
  //     return Service._id !== id;
  //   })
  //   this.setState({ cus_RequestServices: newList });

  // }

  render() {
    let allServices = <h3> No Services! :( </h3>

    if (this.state.all_instroctor.length > 0) {
      allServices = this.state.all_instroctor.map((Services, index) => {
        return (
      <div class="row">
         <div class="cell" data-title="FullName">
          {Services.FullName}
          </div>
          <div class="cell" data-title="NationalId">
          {Services.NationalId}
          </div>
          <div class="cell" data-title="Email">
          {Services.Email}
          </div>
          <div class="cell" data-title="Phone">
          {Services.Phone}
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
            اسم المدرب
              </div>
            <div class="cell">
            رقم الهوية
              </div>
            <div class="cell">
            البريد الإلكتروني
              </div>
            <div class="cell">
            رقم الجوال
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