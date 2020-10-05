import React from 'react'
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import './portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
        <header className="portfolio__header component-header--transparent">
            <h2>Add Your Title Here</h2>
            <p>Replace your text here!  Replace your text here!</p>
        </header>
        <div className="portfolio__filter">
          <p>
            
          </p>
          <ul className="portfolio__filter-list"></ul>
          <Button variant="outline-secondary" active>Secondary</Button>
          <Button variant="outline-secondary">Secondary</Button>
          <Button variant="outline-secondary">Secondary</Button>
          <Button variant="outline-secondary">Secondary</Button>
        </div>
        <Container className="portfolio__container">
            <div className="portfolio__product product">
              <a className="product__link" href="/product/id?1">
                <div className="product__image-container">
                  <div className="product__image">
                    <FontAwesomeIcon icon={faImage} />
                  </div>
                </div>
                <div className="product__text-container">
                  <p className="product__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="product__price-container">
                    <p className="product__price product__price--new">$ 456</p>
                    <p className="product__price product__price--old">$ 1024</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="portfolio__product product">
              <a className="product__link" href="/product/id?1">
                <div className="product__image-container">
                  <div className="product__image">
                    <FontAwesomeIcon icon={faImage} />
                  </div>
                </div>
                <div className="product__text-container">
                  <p className="product__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="product__price-container">
                    <p className="product__price product__price--new">$ 456</p>
                    <p className="product__price product__price--old">$ 1024</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="portfolio__product product">
              <a className="product__link" href="/product/id?1">
                <div className="product__image-container">
                  <div className="product__image">
                    <FontAwesomeIcon icon={faImage} />
                  </div>
                </div>
                <div className="product__text-container">
                  <p className="product__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="product__price-container">
                    <p className="product__price product__price--new">$ 456</p>
                    <p className="product__price product__price--old">$ 1024</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="portfolio__product product">
              <a className="product__link" href="/product/id?1">
                <div className="product__image-container">
                  <div className="product__image">
                    <FontAwesomeIcon icon={faImage} />
                  </div>
                </div>
                <div className="product__text-container">
                  <p className="product__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="product__price-container">
                    <p className="product__price product__price--new">$ 456</p>
                    <p className="product__price product__price--old">$ 1024</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="portfolio__product product">
              <a className="product__link" href="/product/id?1">
                <div className="product__image-container">
                  <div className="product__image">
                    <FontAwesomeIcon icon={faImage} />
                  </div>
                </div>
                <div className="product__text-container">
                  <p className="product__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="product__price-container">
                    <p className="product__price product__price--new">$ 456</p>
                    <p className="product__price product__price--old">$ 1024</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="portfolio__product product">
              <a className="product__link" href="/product/id?1">
                <div className="product__image-container">
                  <div className="product__image">
                    <FontAwesomeIcon icon={faImage} />
                  </div>
                </div>
                <div className="product__text-container">
                  <p className="product__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="product__price-container">
                    <p className="product__price product__price--new">$ 456</p>
                    <p className="product__price product__price--old">$ 1024</p>
                  </div>
                </div>
              </a>
            </div>
        </Container>
    </div>
  );
}

export default Portfolio