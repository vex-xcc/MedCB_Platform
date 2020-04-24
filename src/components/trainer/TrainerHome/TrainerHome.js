import React from 'react';
import { getAllActivityListInstructor, getAllActivityFinshedListInstructor , FinishedActivities} from '../../api';
import { getInfo } from '../../login/decodeToken'
import '../../manager/allTrainers/allTrainers.css'
export default class TrainerHome extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      reg_activities:[],
      finished_activities:[],

    };
  }
// ---------------------------------------------------
  componentDidMount() {

    this.AllActivityFinshedList()
    this.AllActivityList()

  }
// ---------------------------------------------------
  AllActivityFinshedList = () =>{
          // Mack API call 
                //   let mId = getInfo().data._id
                let mId = "5ea1ebe66ce9fa8b98255f9d";

      getAllActivityFinshedListInstructor(mId)
      .then((reponse) => {
        console.log('reponse.data', reponse.data)
        let data = reponse.data
        this.setState({ finished_activities: data })
        // this.set(reponse.data)
      })
      .catch((error) => {
        console.log(' API error: ', error);
      })
  }
// ---------------------------------------------------
  AllActivityList = () =>{
      // Mack API call 
            //   let mId = getInfo().data._id
            let mId = "5ea1ebe66ce9fa8b98255f9d"
    getAllActivityListInstructor(mId)
      .then((reponse) => {
        console.log('reponse.data', reponse.data)
        this.set(reponse.data)
      })
      .catch((error) => {
        console.log(' API error: ', error);
      })
  }
// ---------------------------------------------------
  set = data =>{
    this.setState({ reg_activities: data })
  }


  changeStateToFinished = (id) => {
    // // Make an API Call to Finished a activitie
    // FinishedActivities(id)
    // console.log(`Make an API Call to Finished a activitie the ${id} `)

    // const newList = this.state.reg_activities.filter((activitie) => {
    //   return activitie._id !== id;
    // })
    // this.setState({ reg_activities: newList });

  }

  render() {
    let allReg_activities 

    if (this.state.reg_activities.length > 0) {
      allReg_activities = this.state.reg_activities.map((activitie, index) => {
        return (
      <div className="row">
         <div className="cell" data-title="ActivityName">
          {activitie.ActivityName}
          </div>
          <div className="cell" data-title="ActivityDescription">
          {activitie.ActivityDescription}
          </div>
          <div className="cell" data-title="ActivityLocation">
          {activitie.ActivityLocation}
          </div>
          <div className="cell" data-title="ActivityState">
          {activitie.ActivityState}
          </div>
          <div className="cell" data-title="Finished" onClick={this.changeStateToFinished(activitie._id)} >
          إنهاء
          </div>
      </div>

        );})      
    }

    let allFinished_activities 
    if (this.state.finished_activities.length > 0) {
      allFinished_activities = this.state.finished_activities.map((activitie, index) => {
        return (
      <div className="row">
         <div className="cell" data-title="ActivityName">
          {activitie.ActivityName}
          </div>
          <div className="cell" data-title="ActivityDescription">
          {activitie.ActivityDescription}
          </div>
          <div className="cell" data-title="ActivityLocation">
          {activitie.ActivityLocation}
          </div>
          <div className="cell" data-title="ActivityState">
          {activitie.ActivityState}
          </div>
      </div>

        );})      
    }

    return (
<div className="wrapper">


<div className="table">
    
    <div className="row head head1">
      <div className="cell">
        اسم الفعالية
      </div>
      <div className="cell">
        وصف الفعالية
      </div>
      <div className="cell">
        مكان الفعالية
      </div>
      <div className="cell">
        الحالة
      </div>
      <div className="cell">
        إنهاء الفعالية
      </div>
    </div>
    
    {allReg_activities}
  </div>



  <div className="table">
  <div className="row head"> 
  <div className="cell">
        اسم الفعالية
      </div>
      <div className="cell">
        وصف الفعالية
      </div>
      <div className="cell">
        مكان الفعالية
      </div>
      <div className="cell">
        الحالة
      </div>
  </div>
    </div> 
    {allFinished_activities}

</div>

    );}

}