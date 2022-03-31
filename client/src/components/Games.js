import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import GameCard from './GameCard';

function Games() {
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch("/games")
        .then(r => r.json())
        .then(gamesArray => setGames(gamesArray))
    }, [])

    const gamesList = games.map(game => {
        return (
            <GameCard key={game.id} game={game}/>
        )
    })

  return (
    <Row xs={1} md={2} className="g-4">
        {gamesList}
    </Row>
  )
}

export default Games