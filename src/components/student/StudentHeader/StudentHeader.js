import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./header.css";
import StudentHome from "../StudentHome/StudentHome.js";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Route, BrowserRouter, Link, Switch } from "react-router-dom";
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
      <BrowserRouter>
        <div>
        <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">مـ نـ صـ ـة  الأنــديــة</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto">
                <Link to="/StudentHeader/Home">
                  <Nav.Link href="<StudentHome/>">الرئيسية</Nav.Link>
                </Link>
                <Nav.Link href="#features">دوراتي</Nav.Link>
                <NavDropdown title="المزيد" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">معلوماتي</NavDropdown.Item>
                  <NavDropdown.Divider />
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
            path="/StudentHeader/Home"
            component={StudentHome}
          ></Route>

        </Switch>
      </BrowserRouter>
    );
  }
}
