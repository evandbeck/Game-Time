import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function SignUp({ user }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("")

  function handleSubmit(e) {
    e.preventlDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then(r => {
      if (r.ok) {
        r.json().then(user => setUsername(user));
      }
    });
  }

  return (
    <Container>
      <Col>
        <Form onSubmit={handleSubmit}>
          <Form.Label>Sign Up</Form.Label>
          <Row>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control required type="email" placeholder="Enter email" 
              onChange={e => setUsername(e.target.value)}/>
              <Form.Control.Feedback type="invalid" toolkit>Cannot be empty</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" placeholder="Create a password"
          onChange={e => setPassword(e.target.value)} />
          <Form.Control.Feedback type="invalid" tooltip>Cannot be empty</Form.Control.Feedback>

          <Form.Label>PassWord Confirmation</Form.Label>
          <Form.Control required type="password" placeholder="Reenter password"
          onChange={e => setPasswordConfirmation} />
          <Form.Control.Feedback type="invalid" tooltip>Cannot be empty</Form.Control.Feedback>

          
          <Button type="submit">Sign Up</Button>
        </Form>
      </Col>
    </Container>
  )
}

export default SignUp