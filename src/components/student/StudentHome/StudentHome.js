import React, { Component } from 'react'
import './StudentHome.css'
import Activities from "../activities/activities"

export default class StudentHome extends Component {
   constructor(props) {
      super(props);
      this.state = {
         toggle: false,
         type: "",
      };
   }
   togglehandler() {
      // e.preventDefault();
      this.setState({
         toggle: !this.state.toggle
      })
   }
   typehandler(type) {
      this.setState({
         type: type
      })
      this.togglehandler()
   }
   render() {
      return (
         <>

            <div className="about">
               <a className="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank">
                  <span className="icon"></span>
               </a>
               <a className="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank">
                  <span className="icon"></span>
               </a>
               <a className="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" target="_blank">
                  <span className="icon"></span>
               </a>
               <a className="bg_links logo"></a>
            </div>

            {this.state.toggle === false?
            <div className="contener">

               <div className="card" onClick= {()=>this.typehandler("التعليم") }>
                  <div className="icon"><i className="material-icons md-36">local_library</i></div>
                  <p className="title">التعليم</p>
                  <p className="text">Click to see or edit your profile page.</p>
               </div>

               <div className="card" onClick= {()=>this.typehandler("الثقافة") }>
                  <div className="icon"><i className="material-icons md-36">emoji_objects</i></div>
                  <p className="title">الثقافة</p>
                  <p className="text">Check all your favourites in one place.</p>
               </div>

               <div className="card" onClick= {()=>this.typehandler("الترفيه") }>
                  <div className="icon"><i className="material-icons md-36">sentiment_very_satisfied</i></div>
                  <p className="title">الترفيه</p>
                  <p className="text">Add or change your contacts and links.</p>
               </div>

               <div className="card" onClick= {()=>this.typehandler("الرياضة") }>
                  <div className="icon"><i className="material-icons md-36">directions_run</i></div>
                  <p className="title">الرياضة</p>
                  <p className="text">Add or change your contacts and links.</p>
               </div>
            </div>
            : 
            <Activities tog={e=>this.togglehandler(e)}  type={this.state.type } />
            }
         </>
      )
   }
}
