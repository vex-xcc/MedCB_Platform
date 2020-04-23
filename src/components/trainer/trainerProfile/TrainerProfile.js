import React from 'react'
import './TrainerProfile.css';
import { getInfo } from "../../login/decodeToken";
export default class TrainerProfile extends React.Component {
  
  render() {
    let info = getInfo().data;
    return (
<aside className="profile-card">
  <header>
    {/* <!-- here’s the avatar --> */}
    <a>
      <img src="http://icon-library.com/images/profiles-icon/profiles-icon-0.jpg" className="hoverZoomLink"/>
    </a>

    {/* <!-- the username --> */}
    <h1>
            الاسم
    </h1>

  </header>

  {/* <!-- bit of a bio; who are you? --> */}
  <div className="profile-bio">

    <p>
     رقم الجوال
    </p>

    <p>
     الايميل
    </p>

  </div>

  {/* <!-- some social links to show off --> */}
  <ul className="profile-social-links">
    <li>
      <a>
        <i className="fa fa-facebook"></i>
      </a>
    </li>
    <li>
      <a>
        <i className="fa fa-twitter"></i>
      </a>
    </li>
  </ul>
</aside>
    )
  }
}


