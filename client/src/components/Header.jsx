import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavLink, Container } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand='lg' variant='light' bg="light">
          <Container>
            <NavbarBrand href="#home"><h4><strong>COCO</strong></h4></NavbarBrand>
            <NavbarToggle aria-controls="responsive-navbar-nav" />
            <NavbarCollapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <NavLink eventKey={1}>Login to Google</NavLink>
              </Nav>
            </NavbarCollapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
