import React from 'react';
import ActivitiesOnProgress from './onProgressActivityContainer'
import ActivitiesFinshed from './finishedActivityContainer'
import { getInfo } from '../login/decodeToken'
export default class DisplayAllTable extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isManager:getInfo().data.InstructorRole === "Manager",
    };
  }

  render() {
   
    return (
     <div>
          {this.state.isManager === true ?  <button className="button" onClick={this.props.goBack}><i className="material-icons"> arrow_back </i></button>:<></>}
         <ActivitiesOnProgress/>
         <ActivitiesFinshed/>
     </div>

    );
  }

}