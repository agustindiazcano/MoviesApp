import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ImageCarousel () {

  return (
    <Carousel className="movieCards">
      <Carousel.Item interval={1000}>

        <img

          className="centerCar"
          src="https://images4.alphacoders.com/104/thumb-1920-1046308.jpg"
        />

        <Carousel.Caption >
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>

        <img
          className="centerCar"
          alt="Responsive image"
          src="https://images8.alphacoders.com/457/thumb-1920-457955.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>


        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

        <img
          className="centerCar"
          alt="Responsive image"
          src="https://images8.alphacoders.com/640/thumb-1920-640499.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>

        <img

          className="centerCar"
          src="https://images.alphacoders.com/650/thumb-1920-650018.jpg"
        />

        <Carousel.Caption >
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>

        <img

          className="centerCar"
          src="https://images6.alphacoders.com/583/thumb-1920-583162.jpg"
        />

        <Carousel.Caption >
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>

        <img

          className="centerCar"
          src="https://images3.alphacoders.com/106/thumb-1920-1063819.jpg"
        />

        <Carousel.Caption >
        </Carousel.Caption>
      </Carousel.Item>


    </Carousel>
  )
}

export default ImageCarousel;