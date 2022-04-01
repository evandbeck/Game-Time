import React, { useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'

function MeetUpCard({ description, date, time, id }) {
  const [isJoined, setIsJoined] = useState(false)
  const [meetup, setMeetup] = useState(null)

  function handleJoinNow(id) {
    console.log(id)
    setIsJoined(isJoined => !isJoined)
    fetch("/users", {
      method: "PATCH",
      headers: { 
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ meetup_id: meetup })
      })
    }

  return (
    <div><Card style={{ width: '18rem', height: '15rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Date: {date}</Card.Text>
        <Card.Text>Time: {time}</Card.Text>
        <Button variant="primary" onClick={(e) => console.log(e.target.value)}>Join Now</Button>
      </Card.Body>
    </Card>
    <Modal show={isJoined}>
      <Modal.Header closeButton>
        <Modal.Title>Modal Heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>You've Joined!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default MeetUpCard