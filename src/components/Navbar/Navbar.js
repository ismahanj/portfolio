import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import "./Navbar.css"

function NavBar(){
    return (
        <>
        
 <Navbar id="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
 
 
  <Navbar.Brand href="#home">Ismahan's Portfolio</Navbar.Brand>
  
  
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#Home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#cards.js">Projects</Nav.Link>
      <Nav.Link  href="#contact">Contact</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
  
</Navbar>
        </>
    )
}

export default NavBar; 