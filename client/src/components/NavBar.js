import React from 'react'
import { Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function  NavBar() {
  return (
    <Nav className="justify-content-center" variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/login">Log In</Nav.Link>
      </Nav.Item>

    </Nav>
  )
}

export default  NavBar