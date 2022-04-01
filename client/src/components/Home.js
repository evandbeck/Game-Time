import React, { useState, useEffect } from 'react';
import { Carousel, Row, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import MeetUps from './MeetUps';
import GameCard from './GameCard';

function Home() {
  const [games, setGames] = useState([])
  const [next, setNext] = useState({})

  useEffect(() => {
    fetch('/games')
    .then(r => r.json())
    .then(gamesArray => setGames(gamesArray))

    fetch('/meetups/next')
    .then(r => r.json())
    .then(nextMeet => setNext(nextMeet[0]))
  }, [])

  const gamesList = games.map(game => {
    return (
        <Carousel.Item>
            <GameCard key={game.id} game={game}/>
        </Carousel.Item>
    )
})

  return (
    <>
      <Row>
        <Card className="bg-dark text-white m-3" border="light">
          <Card.Img src="https://th.bing.com/th/id/R.3d3ea54b853acbde5270ae5d651a2f46?rik=55DioIYM%2b4eLwA&pid=ImgRaw&r=0" alt="Main MeetUp"/>
          <Card.ImgOverlay>
            <Card.Title>Main Meetup</Card.Title>
            <Card.Text>Meetup description</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Row>
      <Row>
        <MeetUps />
        <Carousel className="m-3">
            {gamesList}
        </Carousel>
      </Row>
    </>
  )
}

export default Home