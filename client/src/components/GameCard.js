import React from 'react';
import { Col, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function GameCard({ game }) {
    const { title, price, review } = game

  return (
    <>
        <Col>
          <Card>
            <Card.Img className="w-100" src="https://th.bing.com/th/id/R.3d3ea54b853acbde5270ae5d651a2f46?rik=55DioIYM%2b4eLwA&pid=ImgRaw&r=0" alt="title"/>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{review}</Card.Text>
          </Card>
        </Col>
    </>
  )
}

export default GameCard