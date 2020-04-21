import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "../../student/StudentHeader/header.css";
import ManagerHome from '../managerHome/ManagerHome';
import {Navbar ,NavDropdown,Nav }from'react-bootstrap'
export default class ManagerHeader extends React.Component{
  render(){
    return(
      <div>
<Navbar dir="rtl" lang="ar" collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand href="#home">منصة الاندية</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto" >
      <Nav.Link href="#pricing">الرئيسية</Nav.Link>
      <Nav.Link href="#features">الدورات</Nav.Link>
      <NavDropdown  title="نجرب" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">واحد</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">اثنين</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">ثلاث</NavDropdown.Item>
        <NavDropdown.Divider/>
        <NavDropdown.Item href="#action/3.4">اربع</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>

<ManagerHome/>

      </div>
    );
  }

}