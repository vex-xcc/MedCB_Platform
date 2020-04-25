import React from 'react';
import "./allTrainers.css"
import { getInfo } from '../../login/decodeToken'

import { getAllinstructor } from '../../api';
export default class allTrainers extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      all_instroctor: [],
    };
  }

  componentDidMount() {
    let ID = getInfo().data._id
    getAllinstructor(ID)
      .then((reponse) => {
        console.log('reponse.data', reponse.data)
       
        this.setState({ all_instroctor:reponse.data })
      })
      .catch((error) => {
        console.log(' API error: ', error);
      })
  }


  render() {
    let allServices = <h1>لايوجد  مدربون حاليا</h1>

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


    );
  }

}