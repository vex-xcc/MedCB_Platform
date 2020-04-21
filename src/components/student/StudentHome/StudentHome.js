import React, { Component } from 'react'
import './StudentHome.css'
export default class StudentHome extends Component {

    render() {
        return (
            <>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

<div class="about">
   <a class="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank">
      <span class="icon"></span>
   </a>
   <a class="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank">
      <span class="icon"></span>
   </a>
   <a class="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" target="_blank">
      <span class="icon"></span>
   </a>
   <a class="bg_links logo"></a>
</div>
   
   <div class="content">
       
      <div class="card">
         
            <div class="icon"><i class="material-icons md-36">local_library</i></div>
            <p class="title">التعليم</p>
            {/* <p class="text">Click to see or edit your profile page.</p> */}
         
      </div>
      
      <div class="card">
         
            <div class="icon"><i class="material-icons md-36">emoji_objects</i></div>
            <p class="title">الثقافة</p>
            {/* <p class="text">Check all your favourites in one place.</p> */}
         
      </div>
      
      <div class="card">
         
            <div class="icon"><i class="material-icons md-36">sentiment_very_satisfied</i></div>
            <p class="title">الترفيه</p>
            {/* <p class="text">Add or change your contacts and links.</p> */}
         
      </div>

      <div class="card">
         
            <div class="icon"><i class="material-icons md-36">directions_run</i></div>
            <p class="title">الرياضة</p>
            {/* <p class="text">Add or change your contacts and links.</p> */}
         
      </div>
   

   
   </div>
            </>
        )
    }
}
