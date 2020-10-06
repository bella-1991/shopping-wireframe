import React from 'react'
import { Container, Col } from 'react-bootstrap';
import './hero.scss';

function Hero() {
  return (
    <div className="hero">
        <Container className="hero__container">
            <Col xs={12} md={6} className="hero__col hero__col--text">
                <p className="hero__tag-line">Replace your text here!  Replace your text here!</p>
                <h1 className="hero__title">Add Your Title Here</h1>
                <p className="hero__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </Col>
            <Col xs={12} md={6} className="hero__col hero__col--shape">
                <div className="hero__chevron"></div>
                <div className="hero__diamond"></div>
            </Col>
        </Container>
    </div>
  );
}

export default Hero