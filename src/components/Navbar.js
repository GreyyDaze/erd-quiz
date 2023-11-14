import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const AppNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container className="d-flex justify-content-between">
      <Navbar.Brand href="#home" className="text-capitalize">Fastech</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home" className="text-capitalize">Home</Nav.Link>
          <Nav.Link href="#myprofile" className="text-capitalize">My Profile</Nav.Link>
          <Nav.Link href="#activity" className="text-capitalize">Activity</Nav.Link>
          <Nav.Link href="#howitworks" className="text-capitalize">How It Works</Nav.Link>
        </Nav>
        <Nav className="ml-4">
          <Button variant="outline-light" className="mr-2 text-capitalize">Create</Button>
          <Button variant="dark" className="text-capitalize">Sign In</Button>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
