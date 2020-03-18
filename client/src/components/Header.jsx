import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar, NavbarBrand, Nav, NavLink, Container } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import Payments from './Payments';
import "../index.css";

class Header extends Component {

    renderContent() {
      switch(this.props.auth) {
        case null: 
          return
        
        case false:
          return (
            <NavLink href='/auth/google'>Login with Google</NavLink>
          )
        
        default:
          return [
            <NavLink key='1'>
              <Payments />
            </NavLink>,
            <NavLink key='2' href='/api/logout'>Logout</NavLink>
          ]
      }
    }

  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="md" variant="light" bg="light">
          <Container>
            <NavbarBrand className="logo-text" href="#home">
              <h2>coco</h2>
            </NavbarBrand>
            <NavbarToggle aria-controls="responsive-navbar-nav" />
            <NavbarCollapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                {this.renderContent()}
              </Nav>  
            </NavbarCollapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth
});

export default connect(mapStateToProps)(Header);
