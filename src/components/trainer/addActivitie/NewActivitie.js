import React from "react";
import "../../manager/addinstroctor/addinstructor.css";
import {AddNewActivitie}from '../../api';
// import { getInfo } from "../../login/decodeToken";

class NewActivitie extends React.Component {

  constructor() {
    // let info = getInfo().data;
    
    super();
    this.state = {
        TargetAge: null,
        ClubName: "الرواد",
        // ActivityType: info.ClubName,
        ActivityDescription: "",
        ActivityName: "",
        ActivityType:"Sport",
        // ActivityType: info.InstructorsType,
        ActivityState: "Registration",
        ActivityLocation: "",
        StartDate: "",
        EndDate: "",
    };
    this.addActivitie = this.addActivitie.bind(this);
}

addActivitie = Activitie => {
                  //   let Id = getInfo().data._id
                  let Id = "5ea1ebe66ce9fa8b98255f9d";
    // Make an axios request
    AddNewActivitie(Activitie , Id)
      .then(response => {
        console.log(
          `Has been added successfully.`
        );
          })
      .catch(error => {
        console.log("API ERROR: ", error);
      });
  };

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  formSubmit = e => {
    const newActivitie = this.state;
     console.log(newActivitie, " newActivitie");
    e.preventDefault();
    this.addActivitie(newActivitie);
    this.props.history.push("/TrainerHeader");
   };
   
  render() {
    const { TargetAge,ActivityDescription ,ActivityName ,ActivityLocation , StartDate , EndDate} = this.state;
    return (
      <div>
        <form className="parent-wrappe" >
          <h3> إضــافــة نشاط </h3>
          <div className="subscribe-wrappe">
          <div>
              <br />
              <br />
              <input
                className="subscribe-input"
                required
                name="ActivityName"
                value={ActivityName}
                type="ActivityName"
                placeholder="اسم الفالية"
                onChange={this.handleChange}
              />
            </div>  
            <div >
              <br />
              <input
                className="subscribe-input"
                required
                name="TargetAge"
                value={TargetAge}
                type="number"
                placeholder="العمر"
                onChange={this.handleChange}
              />
            </div>          
            <div>
              <br />
              <br />
              <input
                className="subscribe-input"
                required
                name="ActivityDescription"
                value={ActivityDescription}
                placeholder="وصف العفالية"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br />
              <br />
              <input
                className="subscribe-input"
                required
                name="ActivityLocation"
                value={ActivityLocation}
                type="ActivityLocation"
                placeholder="موقع الفالية"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br />
              <br />
              <input
                className="subscribe-input"
                required
                name="StartDate"
                value={StartDate}
                type="date"
                placeholder="تاريج البداية"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br />
              <br />
              <input
                className="subscribe-input"
                required
                name="EndDate"
                value={EndDate}
                type="date"
                placeholder="تاريج النهاية"
                onChange={this.handleChange}
              />
            </div>
           
            <div className="submit-btn" onClick={e => this.formSubmit(e)}>
              إضــافــة
            </div>
            <a href="/TrainerHeader"><i className="material-icons"> arrow_back </i></a>
          </div>
        </form>
      </div>
    );
  }
}
export default NewActivitie;