import React, { Component } from 'react'

export default class TrainerTable extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             trId :this.props.id
        };
      }
    

    render() {
        return (
            <>
   
             <div className="row">
                <div  className="cell" data-title="ActivityName" onClick={e=>this.props.toggle(e) + localStorage.setItem("currentUserInfo", this.props.id)+ console.log(this.props.id)}>
                {this.props.FullName}
                 </div>
                 <div className="cell" data-title="ActivityDescription">
                  {this.props.NationalId}
                 </div>
                 <div className="cell" data-title="ActivityLocation">
                 {this.props.Email}
                 </div>
                 <div className="cell" data-title="ActivityState">
                 {this.props.Phone}
                 </div>
                 </div> 

            </>
        )
         

    
    }
}
