import React, { useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'

function MeetUpCard({ description, date, time, id, onDelete }) {
  const [isJoined, setIsJoined] = useState(false)
  const [meetup, setMeetup] = useState(null)

  function handleJoinNow(id) {
    setIsJoined(isJoined => !isJoined)
    // setMeetup for USERS
    fetch("/meetups", {
      method: "PATCH",
      headers: { 
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ meetup_id: id })
      })
    }

  function deleteMeetup(id) {
    onDelete(id)
    fetch(`/meetups/${id}`, {
      method: 'DELETE',
    })
  }

  return (
    <div>
      <Card style={{ width: '18rem', height: '15rem' }}>
        <Card.Body>
          <Card.Title>Card Title: {id}</Card.Title>
          <Card.Text>Date: {date}</Card.Text>
          <Card.Text>Time: {time > 12} ?  {time-12} : {time}</Card.Text>
          <Button className="m-2" variant="primary" onClick={() => handleJoinNow(id)}>Join Now</Button>
          <Button className="m-2" variant="primary" onClick={() => deleteMeetup(id)}>Delete MeetUp</Button>
        </Card.Body>
      </Card>
      <Modal show={isJoined}>
        <Modal.Header>
          <Modal.Title>It's Game Time!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You've joined the MeetUp for {date}. View My MeetUps for more information.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleJoinNow}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default MeetUpCard