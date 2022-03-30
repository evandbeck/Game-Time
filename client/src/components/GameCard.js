import React from 'react';
import { Carousel } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function GameCard({ game }) {
    const { title, price, review } = game

  return (
    <>
        <img className="d-block w-100"
        src="https://th.bing.com/th/id/R.3d3ea54b853acbde5270ae5d651a2f46?rik=55DioIYM%2b4eLwA&pid=ImgRaw&r=0" alt="title"/>
        <Carousel.Caption>
            <h3>{title}</h3>
            <p>${price}</p>
            <p>{review}</p>
        </Carousel.Caption>
    </>
  )
}

export default GameCard