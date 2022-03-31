import React, { useState, useEffect } from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function MeetUpForm() {
  const [games, setGames] = useState([])
  const [gameId, setGameId] = useState(0)
  const [time, setTime] = useState(0)
  const [platformId, setPlatformId] = useState()

  useEffect(() => {
    fetch("/games")
    .then(r => r.json())
    .then(gamesArray => setGames(gamesArray))
  }, [])

  console.log(games)
  const gamesList = games.map(game => {
    return (
      <option 
      key={game.id}
      value={game.id}>{game.title}</option>
    )
  })

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/meetups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify()
    })
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <FloatingLabel className="m-3" controlId="meetupNameInput" label="Meetup Name">
            <Form.Control type="text" placeholder="Meetup Name" />
          </FloatingLabel>
        </Form.Group>

        <Form.Group>
          <FloatingLabel className="m-3" label="Describe Your Meetup">
            <Form.Control as="textarea" placeholder="Write a Meetup Description" style={{ height: '100px' }}/>
          </FloatingLabel>
        </Form.Group>
        <Form.Group>
          <Form.Label>Choose a game:</Form.Label>
            <Form.Select 
            className="mb-3"
            name="game"
            value={gameId}
            onChange={(e) => console.log(e.target.value)}
            >
              {gamesList}
            </Form.Select>
        </Form.Group>


      </Form>
    </>
  )
}

export default MeetUpForm