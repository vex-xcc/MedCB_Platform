import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./header.css";
import StudentHome from "../StudentHome/StudentHome.js";

import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Route, HashRouter, Link, Switch } from "react-router-dom";
import StudentProfile from '../StudentProfile/StudentProfile';
import displayAllTable from "../../displayAllActivity/DisplayAllTable";
export default class StudentHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logOut = (e) => {
    e.preventDefault();
    this.props.history.push("/");
    localStorage.clear("currentUser");
  };
  render() {
    return (
      <HashRouter>
        <div>
          <Navbar collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand href="#home">مـ نـ صـ ـة  الأنــديــة</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto">
                <Link to="/StudentHeader/Home">
                  <Nav.Link href="<StudentHome/>">الرئيسية</Nav.Link>
                </Link>
                <Link to="/StudentHeader/displayAllTable">
                  <Nav.Link href="#<displayAllTable/>">دوراتي</Nav.Link>
                </Link>
                <NavDropdown title="المزيد" id="collasible-nav-dropdown">
                  <Link to="/StudentHeader/StudentProfile">
                    <NavDropdown.Item href="<StudentProfile/>">معلوماتي</NavDropdown.Item>
                  </Link>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={(e) => this.logOut(e)}>تسجيل الخروج</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <Switch>
          <Route
            exact={true}
            path="/StudentHeader/Home"
            component={StudentHome}
          ></Route>
          <Route
            path="/StudentHeader/StudentProfile"
            component={StudentProfile}
          ></Route>
          <Route
            path="/StudentHeader/StudentProfile"
            component={StudentHome}
          ></Route>
          <Route
            path="/StudentHeader/displayAllTable"
            component={displayAllTable}
          ></Route>
        </Switch>
      </HashRouter>
    );
  }
}
