import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../student/StudentHeader/header.css";
import { Route, BrowserRouter, Link, Switch } from "react-router-dom";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import NewActivitie from "../addActivitie/NewActivitie";

import TrainerHome from '../TrainerHome/TrainerHome'
export default class TrainerHeader extends React.Component{
  render(){
    return(
      <BrowserRouter>
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
      <NavDropdown.Item href="#action/3.1">معلوماتي</NavDropdown.Item>
        <NavDropdown.Divider/>
        <NavDropdown.Item href="#action/3.2">تسجيل الخروج</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>


      </div>
      <Switch>
          <Route exact={true} path="/TrainerHeader/Home" component={TrainerHome} ></Route>
           <Route path="/TrainerHeader/NewActivitie" component={NewActivitie}  ></Route>
        </Switch>
      </BrowserRouter>

    );
  }

}