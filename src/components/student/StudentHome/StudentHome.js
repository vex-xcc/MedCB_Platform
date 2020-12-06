import React, { Component } from 'react'
import './StudentHome.css'
import Activities from "../activities/activities"
import sport from '../../../images/spo.png'
import ed from '../../../images/edu.png'
import en from '../../../images/download.jpeg'
import unn from '../../../images/cl.png'
export default class StudentHome extends Component {
   constructor(props) {
      super(props);
      this.state = {
         toggle: false,
         type: "",
         ActivityType:"",
      };
   }
   togglehandler() {
      // e.preventDefault();
      this.setState({
         toggle: !this.state.toggle
      })
   }
   typehandler(type , ActivityType) {
      this.setState({
         type: type,
         ActivityType: ActivityType,
      })
      this.togglehandler()
   }
   render() {
      return (
         <>

            {this.state.toggle === false?
            <div className="contener">

               <div className="card" style={{backgroundImage: `url(${ed})` }} onClick= {()=>this.typehandler("التعليم" , "Education") }>
                  <div className="icon"><i className="material-icons md-36">local_library</i></div>
                  <p className="title">التعليم</p>
                  <p className="text"> أطلب من العلوم علماً ينفعك ينفي الأذى والعيب ثم يرفعك</p>
               </div>

               <div className="card" style={{backgroundImage: `url(${unn})` }} onClick= {()=>this.typehandler("الثقافة" , "Cultural") }>
                  <div className="icon"><i className="material-icons md-36">emoji_objects</i></div>
                  <p className="title">الثقافة</p>
                  <p className="text">الأمة هوية، والهوية ثقافة، والثقافة دين، ولسان، ووجدان</p>
               </div>

               <div className="card" style={{backgroundImage: `url(${en})` }} onClick= {()=>this.typehandler("الترفيه" , "Entertainment") }>
                  <div className="icon"><i className="material-icons md-36">sentiment_very_satisfied</i></div>
                  <p className="title">الترفيه</p>
                  <p className="text"></p>
               </div>

               <div className="card" style={{backgroundImage: `url(${sport})` }} onClick= {()=>this.typehandler("الرياضة" , "Sport") }>
                  <div className="icon"><i className="material-icons md-36">directions_run</i></div>
                  <p className="title">الرياضة</p>
                  <p className="text"> إن الرياضة مصنع العقلاء .</p>
               </div>
            </div>
            : 
            <Activities tog={e=>this.togglehandler(e)}  type={this.state.type} ActivityType={this.state.ActivityType} />
            }
         </>
      )
   }
}
