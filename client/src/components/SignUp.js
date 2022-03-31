import React, { useState } from 'react';
import { Form, Button, Row, Col, Container, FloatingLabel } from 'react-bootstrap';
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
      <Row>
        <Col>
        <Form onSubmit={handleSubmit}>
          <h2 className="m-3">Sign Up</h2>
          <Row>
            <Form.Group>
              <FloatingLabel
              controlId="emailInput"
              label="Email address"
              className="mb-3">
              <Form.Control required type="email" placeholder="Enter email" 
              onChange={e => setUsername(e.target.value)}/>
              </FloatingLabel>
              <Form.Control.Feedback type="invalid" toolkit>Cannot be empty</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <FloatingLabel
          controlId="passwordInput"
          label="Password"
          className="mb-3"
          >
          <Form.Control required type="password" placeholder="Create a password"
          onChange={e => setPassword(e.target.value)} />
          </FloatingLabel>
          <Form.Control.Feedback type="invalid" tooltip>Cannot be empty</Form.Control.Feedback>

          <FloatingLabel
          controlId="passwordConfirmationInput"
          label="Password Confirmation"
          className="mb-3"
          >
          <Form.Control required type="password" placeholder="Reenter password"
          onChange={e => setPasswordConfirmation} />
          </FloatingLabel>
          <Form.Control.Feedback type="invalid" tooltip>Cannot be empty</Form.Control.Feedback>

          
          <Button type="submit" className="mb-3">Sign Up</Button>
        </Form>
        </Col>
        <Col>
          <h1>Welcome to Game Time</h1>
        </Col>
      </Row>
      
    </Container>
  )
}

export default SignUp