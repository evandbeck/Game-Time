import React, { useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'

function MeetUpCard({ date, time, id, game, handleDelete }) {
  const [isJoined, setIsJoined] = useState(false)
  // const [meetup, setMeetup] = useState(null)

  function handleJoinNow(id) {
    setIsJoined(isJoined => !isJoined)
    // setMeetup for USERS
    // fetch("/meetups", {
    //   method: "PATCH",
    //   headers: { 
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ meetup_id: id })
    //   })
    }

  function deleteMeetup(id) {
    handleDelete(id)
    fetch(`/meetups/${id}`, {
      method: 'DELETE',
    })
  }

  return (
    <div>
      <Card style={{ width: '18rem', height: '18rem' }}>
        <Card.Body>
          <Card.Title>{game.title}</Card.Title>
         <Card.Text>Date: {date}</Card.Text>
          <Card.Text>Time: {time}</Card.Text>
          <Button className="m-2" variant="primary" onClick={() => handleJoinNow(id)}>Join Now</Button>
          <Button className="m-2" variant="primary" onClick={() => deleteMeetup(id)}>Delete MeetUp</Button>
        </Card.Body>
      </Card>
      <Modal show={isJoined}>
        <Modal.Header>
          <Modal.Title>It's Game Time!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You've joined the MeetUp for {game.title}.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleJoinNow}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default MeetUpCard