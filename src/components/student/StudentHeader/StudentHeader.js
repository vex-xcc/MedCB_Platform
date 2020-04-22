import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./header.css";
import StudentHome from "../StudentHome/StudentHome.js";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Route, BrowserRouter, Link, Switch } from "react-router-dom";
export default class StudentHeader extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar
            dir="rtl"
            lang="ar"
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
          >
            <Navbar.Brand href="#home">منصة الاندية</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto">
                <Link to="/StudentHeader/Home">
                  <Nav.Link href="<StudentHome/>">الرئيسية</Nav.Link>
                </Link>
                <Nav.Link href="#features">الدورات</Nav.Link>
                <NavDropdown title="المزيد" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#"><i class="material-icons md-36">portrait</i>معلوماتي</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">تسجيل الخروج</NavDropdown.Item>
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

        </Switch>
      </BrowserRouter>
    );
  }
}
