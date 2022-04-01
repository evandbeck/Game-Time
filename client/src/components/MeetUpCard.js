import React from 'react'
import { Card, Button } from 'react-bootstrap'

function MeetUpCard({ description, date, time, game }) {
  return (
    <Card style={{ width: '18rem', height: '15rem' }} className="m-3">
      <Card.Body>
        <Card.Title>{game.title}</Card.Title>
        <Card.Text>Date: {date}</Card.Text>
        <Card.Text>Time: {time - 12}</Card.Text>
        <Button variant="primary">Join Now</Button>
      </Card.Body>
    </Card>
  )
}

export default MeetUpCard