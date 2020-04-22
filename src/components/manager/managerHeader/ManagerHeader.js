import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../student/StudentHeader/header.css";
import ManagerHome from '../managerHome/ManagerHome';
import { Route, BrowserRouter, Link, Switch } from "react-router-dom";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import allTrainers from "../allTrainers/allTrainers";
import NewInstructor from '../addinstroctor/NewInstructor';
import ManagerProfile from "../managerProfile/ManagerProfile";
export default class ManagerHeader extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  logOut = (e) => {
    e.preventDefault();
    this.props.history.push("/");
    localStorage.clear("currentUser");
  };
  render(){
    return(
      <BrowserRouter>
      <div>
<Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand href="#home">مـ نـ صـ ـة  الأنــديــة</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto" >
    <Link to="/ManagerHeader/Home">
      <Nav.Link href="<ManagerHome/>">الرئيسية</Nav.Link>
      </Link>
      <Link to="/ManagerHeader/trainers">
      <Nav.Link href="<allTrainers/>">المدربين</Nav.Link>
      </Link>
      <NavDropdown  title="المزيد" id="collasible-nav-dropdown">
        <Link to="/ManagerHeader/ManagerProfile">
      <NavDropdown.Item href="<ManagerProfile/>">معلوماتي</NavDropdown.Item>
      </Link>
        <Link to="/ManagerHeader/AddInstructor">
          <NavDropdown.Item href="<NewInstructor/>">اضافة مدرب</NavDropdown.Item>
          </Link>
        <NavDropdown.Divider/>
        <Link onClick={(e) => this.logOut(e)}>
        <NavDropdown.Item href="#action/3.2">تسجيل الخروج</NavDropdown.Item>
        </Link>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>


      </div>
      <Switch>
          <Route
            exact={true}
            path="/ManagerHeader/Home"
            component={ManagerHome}
          ></Route>

           <Route
            path="/ManagerHeader/trainers"
            component={allTrainers}
          ></Route>

           <Route
            path="/ManagerHeader/AddInstructor"
            component={NewInstructor}
          ></Route>

          <Route
            path="/ManagerHeader/ManagerProfile"
            component={ManagerProfile}
          ></Route>
        </Switch>
      </BrowserRouter>

    );
  }

}