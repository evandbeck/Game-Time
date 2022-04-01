import React, { useState, useEffect } from 'react';
import { Carousel, Row, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import MeetUps from './MeetUps';
import GameCard from './GameCard';
import MeetUpCard from './MeetUpCard';

function Home() {
  const [games, setGames] = useState([])
  const [title, setTitle] = useState("")
  const [meetups, setMeetups] = useState([])
  const [user, setUser] = useState(null);
  const [desc, setDesc] = useState("");

  useEffect(() => {
    fetch('/games')
    .then(r => r.json())
    .then(gamesArray => setGames(gamesArray))

    fetch('/meetups/next')
    .then(r => r.json())
    .then(nextMeet => {
      setTitle(nextMeet[0].game.title)
      setDesc(nextMeet[0].description)
    })

    fetch('/meetups/limited')
    .then(r => r.json())
    .then(meetupsArray => setMeetups(meetupsArray))
  }, [])

  console.log(title)

  const gamesList = games.map(game => {
    return (
        <Carousel.Item>
            <GameCard key={game.id} game={game}/>
        </Carousel.Item>
    )
})

const meetupsList = meetups.map(meetup => {
  return (
    <MeetUpCard key={meetup.id} {...meetup} />
  )
})

  return (
    <>
      <Row>
        <Card className="bg-dark text-white m-3" border="light">
          <Card.Img src="https://th.bing.com/th/id/R.3d3ea54b853acbde5270ae5d651a2f46?rik=55DioIYM%2b4eLwA&pid=ImgRaw&r=0" alt="Main MeetUp"/>
          <Card.ImgOverlay>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{desc}</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Row>
      <Row xs={1} md={2} className="g-2 m-3">
        {meetupsList}
      </Row>
      <Row>
        <Carousel className="m-3">
            {gamesList}
        </Carousel>
      </Row>
    </>
  )
}

export default Home