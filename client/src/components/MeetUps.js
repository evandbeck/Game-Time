import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import MeetUpCard from './MeetUpCard';

function MeetUps() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    fetch("/meetups")
      .then((resp) => resp.json())
      .then(meetupsArray => setMeetups(meetupsArray));
  }, []);

  const displayMeetups = meetups.map(meetup => {
      return (
        <Col className="" style={{display: 'flex', justifyContent: 'center'}}>
          <MeetUpCard key={meetup.id} {...meetup}/>
        </Col>
      )
    })

  return (
    <Container>
      <Row>
        {displayMeetups}
      </Row>
    </Container>
  )
}

export default MeetUps