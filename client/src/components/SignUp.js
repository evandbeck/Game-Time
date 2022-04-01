import React, { useState } from 'react';
import { Form, Button, Row, Col, Container, FloatingLabel, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function SignUp({ user }) {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
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
        name,
        age
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
              controlId="nameInput"
              label="Name"
              className="mb-2">
                <Form.Control required type="text" placeholder="Enter name"
                onChange={e => setName(e.target.value)}/>
              </FloatingLabel>
            </Form.Group>

            <Form.Group>
              <FloatingLabel
              controlId="ageInput"
              label="Age"
              className="mb-2">
                <Form.Control required placeholder="Enter age"
                onChange={e => setAge(e.target.value)}/>
              </FloatingLabel>
            </Form.Group>

            <Form.Group>
              <FloatingLabel
              controlId="emailInput"
              label="Email address"
              className="mb-2">
              <Form.Control required type="email" placeholder="Enter email" 
              onChange={e => setUsername(e.target.value)}/>
              </FloatingLabel>
              <Form.Control.Feedback type="invalid" toolkit>Cannot be empty</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <FloatingLabel
          controlId="passwordInput"
          label="Password"
          className="mb-2"
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

          
          <Button type="submit" className="mb-2">Sign Up</Button>
        </Form>
        </Col>
        <Col>
          <Card border="secondary">
            <Card.Img src="https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F0403%2Fr685935_864x1296_2%2D3.jpg&w=570&h=855&format=jpg" alt="bruce" />
            <Card.ImgOverlay>
              <Card.Title className="text-white" style={{ 
                fontFamily: "Papyrus", 
                fontSize: "40px",
                textAlign: "right"
                }}>It's Time!</Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      
    </Container>
  )
}

export default SignUp