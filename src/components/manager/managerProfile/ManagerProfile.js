import React from 'react'
import '../../trainer/trainerProfile/TrainerProfile.css'
import { getInfo } from "../../login/decodeToken";
export default class ManagerProfile extends React.Component {
  
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
            {info.FullName}
    </h1>

  </header>

  {/* <!-- bit of a bio; who are you? --> */}
  <div className="profile-bio">

    <p>
     {info.Phone}

    </p>

    <p>
     {info.Email}
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



