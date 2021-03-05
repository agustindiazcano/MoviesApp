import React from 'react';
import { Carousel, Jumbotron, Button, Container, Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  Cardrousel from './CardGroup'
import ActorsCarousel from './ActorsCarousel'

function Carrousel() {



  return (

    <>

<Carousel>

    

  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://images3.alphacoders.com/570/thumb-1920-570682.jpg"
      alt="First slide"
    />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://images7.alphacoders.com/112/thumb-1920-1125352.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images8.alphacoders.com/801/thumb-1920-801533.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images3.alphacoders.com/802/thumb-1920-802792.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>

</Carousel>

    </>

  )
}

export default Carrousel;