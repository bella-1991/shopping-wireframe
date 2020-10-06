import React from 'react'
import { Carousel, Container } from 'react-bootstrap';
import './carousel.scss';

function CarouselComponent() {
  return (
    <div className="carousel-component">
        <Carousel>
            <Carousel.Item>
              <Container className="carousel-component__container">
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container className="carousel-component__container">
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container className="carousel-component__container">
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Container>
            </Carousel.Item>
            </Carousel>
    </div>
  );
}

export default CarouselComponent