import React from "react";
import "../../manager/addinstroctor/addinstructor.css";
import {AddNewInstructor}from '../../api';

class NewActivitie extends React.Component {

  constructor() {
    super();
    this.state = {
        TargetAge: 0,
        ClubName: "",
        ActivityType: "",
        ActivityDescription: "",
        ActivityName: "",
        password: "",
        ClubName: "",
        InstructorRole: "",
        InstructorsType: ""
    };
    this.addInstructor = this.addInstructor.bind(this);
}

addInstructor = instructor => {
    // Make an axios request
    AddNewInstructor(instructor)
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
    const newInstructor = this.state;
     console.log(newInstructor, " NewInstructor");
    e.preventDefault();
    this.addInstructor(newInstructor);
   };
   
  render() {
    const { TargetAge,ClubName,ActivityType,ActivityDescription ,ActivityName ,password , InstructorRole , InstructorsType} = this.state;
    return (
      <div>
        <form className="parent-wrappe" >
          <h3>إضــافــة مـدرب</h3>
          <div className="subscribe-wrappe">
            <div >
              {/* <label >الاسم الكامل</label> */}
              <br />
              <input
                className="subscribe-input"
                required
                name="TargetAge"
                value={TargetAge}
                type="TargetAge"
                placeholder="الاسم الكامل"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br />
              {/* <label>اسم المستخدم</label> */}
              <br />
              <input
                className="subscribe-input"
                required
                name="ClubName"
                value={ClubName}
                type="ClubName"
                placeholder="اسم المستخدم"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br />
              {/* <label>رقم الهوية</label> */}
              <br />
              <input
                className="subscribe-input"
                required
                name="ActivityType"
                value={ActivityType}
                type="ActivityType"
                placeholder="رقم الهوية"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br />
              {/* <label>البريد الإلكتروني</label> */}
              <br />
              <input
                className="subscribe-input"
                required
                name="ActivityDescription"
                value={ActivityDescription}
                placeholder="البريد الإلكتروني"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br />
              {/* <label>رقم الجوال</label> */}
              <br />
              <input
                className="subscribe-input"
                required
                name="ActivityName"
                value={ActivityName}
                type="ActivityName"
                placeholder="رقم الجوال"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br />
              {/* <label>الرقم السري</label> */}
              <br />
              <input
                className="subscribe-input"
                required
                name="password"
                value={password}
                type="password"
                placeholder="الرقم السري"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br />
              {/* <label>ClubName</label> */}
              <br />
              <input
                className="subscribe-input"
                required
                name="ClubName"
                value={ClubName}
                type="ClubName"
                placeholder="اسم النادي"
                onChange={this.handleChange}
              />
            </div>
            <div>
              <br />
              <label className="to-the-right">منصب المدرب:</label>
              <br />
              <select
                className="subscribe-input"
                required
                name="InstructorRole"
                value={InstructorRole}
                type="InstructorRole"
                placeholder="منصب المدرب"
                onChange={this.handleChange}
              >
                 <option className="dropdown-content" value="Instructors">مدرب</option>
               <option className="dropdown-content" value="Manager">مدير</option>
            </select>
            </div>
            <div>
              <br /><br/>
              <label className="to-the-right">نوع التدريب:</label>
              <select
                className="subscribe-input"
                required
                name="InstructorsType"
                value={InstructorsType}
                type="text"
                onChange={this.handleChange}
              >
               <option className="dropdown-content" value="Entertaining">الترفيهية</option>
               <option className="dropdown-content" value="Educational">التعليمية</option>
               <option className="dropdown-content" value="Athletic">الرياضية</option>
                </select>
             </div>
          <br/>
           
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