import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function  NavBar({ user }) {

  return (
    <Navbar bg="light" sticky="top">
      <Container>
        <Navbar.Brand style={{fontWeight: "bold"}}>Game Time!</Navbar.Brand>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Brand href="/games">Games</Navbar.Brand>
        <Navbar.Brand href="/signup">Sign Up</Navbar.Brand>
        <Navbar.Brand href="/login">Log In</Navbar.Brand>
      </Container>

    </Navbar>
  )
}

export default  NavBar