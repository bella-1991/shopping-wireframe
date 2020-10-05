import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './header.css';

function Header() {
  return (
        <div className="header">
          <Navbar collapseOnSelect expand="lg" className="header__navbar">
            <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Brand href="/">
                <img src="../assets/logo.png" alt="logo" />
              </Navbar.Brand>
              <div className="header__icons header__icons--mobile">
                <Button variant="dark" className="header__btn"><FontAwesomeIcon icon={faShoppingCart} /></Button>
                <Button variant="dark" className="header__btn"><FontAwesomeIcon icon={faSearch} /></Button>
              </div>
              <Navbar.Collapse id="responsive-navbar-nav" className="header__nav">
                <Nav defaultActiveKey="/home" as="ul">
                  <Nav.Item as="li">
                    <Nav.Link href="/home">
                      Home
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="about">
                      About
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="messages">
                      Messages
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="features">
                      Features
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="tour">
                      Tour
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <div className="header__icons header__icons--desktop">
                  <Button variant="dark" className="header__btn"><FontAwesomeIcon icon={faShoppingCart} /></Button>
                  <Button variant="dark" className="header__btn"><FontAwesomeIcon icon={faSearch} /></Button>
                </div>                
              </Navbar.Collapse>
            </Container>            
          </Navbar>
        </div>
  );
}

export default Header