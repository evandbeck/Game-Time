import React from 'react'
import { Card, Button } from 'react-bootstrap'

function MeetUpCard({ description, date, time }) {
  return (
    <Card style={{ width: '18rem', height: '15rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Date: {date}</Card.Text>
        <Card.Text>Time: {time}</Card.Text>
        <Button variant="primary">Join Now</Button>
      </Card.Body>
    </Card>
  )
}

export default MeetUpCard