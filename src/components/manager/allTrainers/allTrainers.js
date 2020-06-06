import React from 'react';
import "./allTrainers.css"
import { getInfo } from '../../login/decodeToken'
import TrainerTable from './TrainerTable'
import { getAllinstructor } from '../../api';
import TrainerActivityContainer from './TrainerActivityContainer'


export default class allTrainers extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      all_Instructor: [],
      toggle: false,
    };
  }

  componentDidMount() {
    let ID = getInfo().data._id
    getAllinstructor(ID)
      .then((reponse) => {
        this.setState({ all_Instructor: reponse.data })
      })
      .catch((error) => {
        console.log(' API error: ', error);
      })

  }

  toggleHandler = (e) => {
    this.setState({ toggle: !this.state.toggle })
  }
  render() {

    let allInstructor = <h1>لايوجد  مدربون حاليا</h1>
    if (this.state.toggle === false) {
      localStorage.removeItem("currentUserInfo");
      if (this.state.all_Instructor.length > 0) {
        allInstructor = this.state.all_Instructor.map((Instructor, index) => {
          return (
            <TrainerTable
              key={index}
              id={Instructor._id}
              FullName={Instructor.FullName}
              NationalId={Instructor.NationalId}
              Email={Instructor.Email}
              Phone={Instructor.Phone}
              toggle={this.toggleHandler}
            />
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
            {allInstructor}
          </div>
        </div>
      );
    }
    else {
          return (
            <TrainerActivityContainer goBack={this.toggleHandler}/>
          );  
    }
  }
}

