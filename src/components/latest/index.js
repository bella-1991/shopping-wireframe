import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import './latest.scss';

function Latest() {
  const [latest, setLatest] = useState([
    { id:0, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', newPrice: 451, oldPrice: 1021 },
    { id:1, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', newPrice: 452, oldPrice: 1022 },
    { id:2, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', newPrice: 453, oldPrice: 1023 }
  ])

  return (
    <div className="latest">
        <header className="portfolio__header component-header--transparent">
            <h2>Add Your Title Here</h2>
            <p>Replace your text here!  Replace your text here!</p>
        </header>
        <Container className="latest__container">
          { latest.map(item => 
            <div className="latest__product product" key={item.id}>
              <a className="product__link" href={"/product/id?" + item.id}>
                <div className="product__image-container">
                  <div className="product__image">
                    <FontAwesomeIcon icon={faImage} />
                  </div>
                </div>
                <div className="product__text-container">
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

export default Latest