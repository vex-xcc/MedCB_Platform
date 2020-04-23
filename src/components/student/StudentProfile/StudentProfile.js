import React from 'react'
import '../../manager/managerProfile/profile.scss';
import { getInfo } from "../../login/decodeToken";
export default class StudentProfile extends React.Component {
  
  render() {
    let info = getInfo().data;
    return (
   <div className="in-center"> 
<div class="conten">
  <div class="cardd">
    <div class="firstinfo"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/mrvanz/128.jpg"/>
      <div class="profileinfo">
        <h1 value={info.FullName}>Francesco Moustache</h1>
        <h3 value={info.StudentUserName}>Python Ninja</h3>
        <p class="bio">Lived all my life on the top of mount Fuji, learning the way to be a Ninja Dev.</p>
      </div>
    </div>
  </div>
  {/* <div class="badgescard"> <span class="devicons devicons-django"></span><span class="devicons devicons-python"> </span><span class="devicons devicons-codepen"></span><span class="devicons devicons-javascript_badge"></span><span class="devicons devicons-gulp"></span><span class="devicons devicons-angular"></span><span class="devicons devicons-sass"> </span></div> */}
</div>
</div>
    )
  }
}


