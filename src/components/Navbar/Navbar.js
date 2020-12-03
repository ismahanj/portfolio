import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import "./Navbar.css"

function NavBar(){
    return (
        <>
 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <Nav.Link href="#pricing">Projects</Nav.Link>
      <Nav.Link href="#pricing">Skills</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        </>
    )
}

export default NavBar; 