import React from 'react'
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import './new-arrivals.css';

function NewArrivals() {
  return (
    <div className="new-arrivals">
        <header className="new-arrivals__header component-header">
            <h2>New arrival</h2>
        </header>
        <Container className="new-arrivals__container">
            <div className="new-arrivals__product product">
              <a className="product__link" href="/product/id?1">
                <div className="product__image-container">
                  <div className="product__image">
                    <FontAwesomeIcon icon={faImage} />
                  </div>
                </div>
                <div className="product__text-container">
                  <h4 className="product__title">Replace your text here!</h4>
                  <p className="product__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="product__price-container">
                    <p className="product__price product__price--new">$ 456</p>
                    <p className="product__price product__price--old">$ 1024</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="new-arrivals__product product">
              <a className="product__link" href="/product/id?1">
                <div className="product__image-container">
                  <div className="product__image">
                    <FontAwesomeIcon icon={faImage} />
                  </div>
                </div>
                <div className="product__text-container">
                  <h4 className="product__title">Replace your text here!</h4>
                  <p className="product__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="product__price-container">
                    <p className="product__price product__price--new">$ 456</p>
                    <p className="product__price product__price--old">$ 1024</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="new-arrivals__product product">
              <a className="product__link" href="/product/id?1">
                <div className="product__image-container">
                  <div className="product__image">
                    <FontAwesomeIcon icon={faImage} />
                  </div>
                </div>
                <div className="product__text-container">
                  <h4 className="product__title">Replace your text here!</h4>
                  <p className="product__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="product__price-container">
                    <p className="product__price product__price--new">$ 456</p>
                    <p className="product__price product__price--old">$ 1024</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="new-arrivals__product product">
              <a className="product__link" href="/product/id?1">
                <div className="product__image-container">
                  <div className="product__image">
                    <FontAwesomeIcon icon={faImage} />
                  </div>
                </div>
                <div className="product__text-container">
                  <h4 className="product__title">Replace your text here!</h4>
                  <p className="product__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="product__price-container">
                    <p className="product__price product__price--new">$ 456</p>
                    <p className="product__price product__price--old">$ 1024</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="new-arrivals__product product">
              <a className="product__link" href="/product/id?1">
                <div className="product__image-container">
                  <div className="product__image">
                    <FontAwesomeIcon icon={faImage} />
                  </div>
                </div>
                <div className="product__text-container">
                  <h4 className="product__title">Replace your text here!</h4>
                  <p className="product__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="product__price-container">
                    <p className="product__price product__price--new">$ 456</p>
                    <p className="product__price product__price--old">$ 1024</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="new-arrivals__product product">
              <a className="product__link" href="/product/id?1">
                <div className="product__image-container">
                  <div className="product__image">
                    <FontAwesomeIcon icon={faImage} />
                  </div>
                </div>
                <div className="product__text-container">
                  <h4 className="product__title">Replace your text here!</h4>
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

export default NewArrivals