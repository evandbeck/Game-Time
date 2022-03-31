import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then(r => {
      if (r.ok) {
        r.json().then(user => setUser(user));
      }
    });
  }

  return (
    <Container className="rounded mb-0">
      
      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
           onChange={e => setUsername(e.target.value)}/>
        </Form.Group>

        <Form.Group class="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" 
          onChange={e => setPassword(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCheckbox">
          <Form.Check type="checkbox" label="Send me promotional info and offers" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Login