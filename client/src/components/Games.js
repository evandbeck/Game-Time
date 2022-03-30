import React, { useEffect, useState } from 'react';
import { Container, Carousel, Row } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import GameCard from './GameCard';

function Games() {
    const [games, setGames] = useState([])
    const [index, setIndex] = useState(0);

    useEffect(() => {
        fetch("/games")
        .then(r => r.json())
        .then(gamesArray => {
            console.log(gamesArray)
            setGames(gamesArray)
        })
    }, [])

    const gamesList = games.map(game => {
        return (
            <Carousel.Item>
                <GameCard key={game.id} game={game}/>
            </Carousel.Item>

        )
    })

  return (
    <Container>
        <Carousel >
            {gamesList}
        </Carousel>
    </Container>
  )
}

export default Games