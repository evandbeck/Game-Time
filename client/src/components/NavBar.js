import React from 'react'
import { Navbar, Container, NavbarBrand } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function  NavBar() {
  return (
    <Navbar bg="light" sticky="top">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Brand href="/signup">Sign Up</Navbar.Brand>
        <Navbar.Brand href="/games">Games</Navbar.Brand>
        <Navbar.Text>Signed in as: <a href="/login"></a></Navbar.Text>
        <Navbar.Brand href="/login">Log In</Navbar.Brand>
      </Container>

    </Navbar>
  )
}

export default  NavBar