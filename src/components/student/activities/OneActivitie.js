// One Activitie

import React from "react";
export default class OneActivitie extends React.Component {


      registerClick = (e) => {
        e.preventDefault();
        console.log( `student click register in ${this.props.id}`)
        this.props.registerOnActivitie(this.props.id);
      }
    render(){
            return(
                    <li className='work'>
                        <input className='radio' id={`work${this.props.key}`} name='works' type='radio'></input>

                        <div className="relative">
                            <label htmlFor={`work${this.props.key}`} >{this.props.ActivityName}</label>
                            <span className='circle'></span>
                        </div>

                        <div className='contents'>
                            <p> {this.props.ClubName} </p>
                            <p> {this.props.ActivityDescription} </p>
                            <p className='registerClick' onClick={this.registerClick}> اشتراك</p>
                        </div>
                    </li>
            );
        }
    
    


}