import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import './new-arrivals.css';

function NewArrivals() {
  const [newArrivals, setNewArrivals] = useState([
          { id:0, title: 'Replace your text here!', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', newPrice: 451, oldPrice: 1021 },
          { id:1, title: 'Replace your text here!', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', newPrice: 452, oldPrice: 1022 },
          { id:2, title: 'Replace your text here!', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', newPrice: 453, oldPrice: 1023 },
          { id:3, title: 'Replace your text here!', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', newPrice: 454, oldPrice: 1024 },
          { id:4, title: 'Replace your text here!', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', newPrice: 455, oldPrice: 1025 },
          { id:5, title: 'Replace your text here!', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', newPrice: 456, oldPrice: 1026 }
        ])

  return (
    <div className="new-arrivals">
        <header className="new-arrivals__header component-header">
            <h2>New arrival</h2>
        </header>
        <Container className="new-arrivals__container">
          { newArrivals.map(item => 
            <div className="new-arrivals__product product" key={item.id}>
              <a className="product__link" href={"/product/id?" + item.id}>
                <div className="product__image-container">
                  <div className="product__image">
                    <FontAwesomeIcon icon={faImage} />
                  </div>
                </div>
                <div className="product__text-container">
                  <h4 className="product__title">{item.title}</h4>
                  <p className="product__description">{item.description}</p>
                  <div className="product__price-container">
                    <p className="product__price product__price--new">$ {item.newPrice}</p>
                    <p className="product__price product__price--old">$ {item.oldPrice}</p>
                  </div>
                </div>
              </a>
            </div>
          )}
        </Container>
    </div>
  );
}

export default NewArrivals