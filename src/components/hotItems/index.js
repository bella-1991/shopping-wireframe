import React from 'react'
import { Container, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faImage } from '@fortawesome/free-solid-svg-icons';
import './hot-items.css';

function HotItems() {
  return (
    <div className="hot-items">
        <header className="hot-items__header component-header">
            <h2>hot</h2>
        </header>
        <Container className="hot-items__container">
          <Col xs={12} md={6} className="hot-items__col hot-items__col--primary">
            <div className="hot-items__media-item">
              <div className="hot-items__media">
                <FontAwesomeIcon icon={faPlayCircle} />
              </div>
              <p className="hot-items__description">Replace your text here!</p>                  
            </div>
          </Col>
          <Col xs={12} md={6} className="hot-items__col hot-items__col--secondary">
            <div className="hot-items__media-item">
              <div className="hot-items__media">
                <FontAwesomeIcon icon={faImage} />
              </div>
              <p className="hot-items__description">Replace your text here!</p>                  
            </div>
            <div className="hot-items__media-item">
              <div className="hot-items__media">
                <FontAwesomeIcon icon={faImage} />
              </div>
              <p className="hot-items__description">Replace your text here!</p>                  
            </div>
            <div className="hot-items__media-item">
              <div className="hot-items__media">
                <FontAwesomeIcon icon={faImage} />
              </div>
              <p className="hot-items__description">Replace your text here!</p>                  
            </div>
            <div className="hot-items__media-item">
              <div className="hot-items__media">
                <FontAwesomeIcon icon={faImage} />
              </div>
              <p className="hot-items__description">Replace your text here!</p>                  
            </div>
          </Col>
          <Col xs={12} className="hot-items__col hot-items__col--tertiary">
          <div className="hot-items__media-item">
              <div className="hot-items__media">
                <FontAwesomeIcon icon={faImage} />
              </div>
              <p className="hot-items__description">Replace your text here!</p>                  
            </div>
            <div className="hot-items__media-item">
              <div className="hot-items__media">
                <FontAwesomeIcon icon={faImage} />
              </div>
              <p className="hot-items__description">Replace your text here!</p>                  
            </div>
            <div className="hot-items__media-item">
              <div className="hot-items__media">
                <FontAwesomeIcon icon={faImage} />
              </div>
              <p className="hot-items__description">Replace your text here!</p>                  
            </div>
            <div className="hot-items__media-item">
              <div className="hot-items__media">
                <FontAwesomeIcon icon={faImage} />
              </div>
              <p className="hot-items__description">Replace your text here!</p>                  
            </div>
          </Col>
        </Container>
    </div>
  );
}

export default HotItems