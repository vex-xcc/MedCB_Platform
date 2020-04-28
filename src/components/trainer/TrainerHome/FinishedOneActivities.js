// Finished Activities

import React from "react";
export default class FinishedOneActivities extends React.Component {


      FinishedClick = (e) => {
        e.preventDefault();
        console.log( `Trainer click Finished in ${this.props.id}`)
        this.props.changeStateToFinished(this.props.id);
        // this.props.AllActivityFinshedList()
        window.location.reload(false);
      }
    render(){
            return(
                <div className="row">
                <div className="cell" data-title="ActivityName">
                 {this.props.ActivityName}
                 </div>
                 <div className="cell" data-title="ActivityDescription">
                 {this.props.ActivityDescription}
                 </div>
                 <div className="cell" data-title="ActivityLocation">
                 {this.props.ActivityLocation}
                 </div>
                 <div className="cell" data-title="ActivityState">
                 {this.props.ActivityState}
                 </div>
                 <div className="cellfinish " data-title="Finished" onClick={this.FinishedClick} >
                 إنهاء
                 </div>
             </div>
            );
        }
    
    


}