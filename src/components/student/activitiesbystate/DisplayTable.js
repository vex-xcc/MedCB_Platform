import React from 'react';
import ActivitiesOnProgress from './ActivitiesOnProgress';
import ActivitiesFinshed from './ActivitiesFinshed';
export default class DisplayTable extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
     
    };
  }

  render() {
   
    return (
     <div>
         <ActivitiesOnProgress/>
         <ActivitiesFinshed/>
     </div>

    );
  }

}