import React from 'react'
import { Navbar, Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function  NavBar() {
  return (
    <Navbar bg="light" sticky="top">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Brand href="/login">Log In</Navbar.Brand>
        <Navbar.Brand href="/signup">Sign Up</Navbar.Brand>
      </Container>

    </Navbar>
  )
}

export default  NavBar