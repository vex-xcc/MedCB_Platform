import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../student/StudentHeader/header.css";
import { Route, HashRouter, Link, Switch } from "react-router-dom";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import NewActivitie from "../addActivitie/NewActivitie";
import TrainerProfile from "../trainerProfile/TrainerProfile"

import TrainerHome from '../TrainerHome/TrainerHome'
export default class TrainerHeader extends React.Component{

  logOut = (e) => {
    e.preventDefault();
    this.props.history.push("/");
    localStorage.clear("currentUser");
  };
  
  render(){
    return(
      <HashRouter>
      <div>
<Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand href="#home">مـ نـ صـ ـة  الأنــديــة</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto" >
    <Link to="/TrainerHeader/Home">
      <Nav.Link href="<TrainerHome/>">الرئيسية</Nav.Link>
      </Link>
      <Link to="/TrainerHeader/NewActivitie">
      <Nav.Link href="<NewActivitie/>">اضافة نشاط</Nav.Link>
      </Link>
      <NavDropdown  title="المزيد" id="collasible-nav-dropdown">
      <Link to="/TrainerHeader/TrainerProfile">
      <NavDropdown.Item href="<TrainerProfile/>">معلوماتي</NavDropdown.Item>
      </Link>
        <NavDropdown.Divider/>
        <NavDropdown.Item onClick={e=> this.logOut(e)}>تسجيل الخروج</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>


      </div>
      <Switch>
          <Route exact={true} path="/TrainerHeader/Home" component={TrainerHome} ></Route>
           <Route path="/TrainerHeader/NewActivitie" component={NewActivitie}  ></Route>
           <Route exact={true} path="/TrainerHeader/TrainerProfile" component={TrainerProfile} ></Route>
        </Switch>
      </HashRouter>

    );
  }

}