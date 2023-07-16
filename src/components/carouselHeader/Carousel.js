import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Header1 from './header-image.jpg'
import Header2 from './header-image-2.jpg'
import Header3 from './header-image-3.jpg'

function UncontrolledExample() {
  return (
    <Carousel style={{borderBottom:'2px solid white'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Header2}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Header1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Header3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;