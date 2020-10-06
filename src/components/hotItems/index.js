import React, { useState, useEffect } from 'react'
import { Container, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faImage } from '@fortawesome/free-solid-svg-icons';
import './hot-items.css';

function HotItems() {
  const [hotItems, setHotItems] = useState({})

  useEffect(() => {
    fetch('/data/hot-items.json')
      .then(resp => resp.json())
      .then(hotItems => {
        setHotItems(hotItems)
      })
  }, []);

  return (
    <div className="hot-items">
        <header className="hot-items__header component-header">
            <h2>hot</h2>
        </header>
        <Container className="hot-items__container">
          { Object.keys(hotItems).length !== 0 && (
            <>
              <Col xs={12} md={6} className="hot-items__col hot-items__col--primary">
                { hotItems.primary.map(item => (
                  <div className="hot-items__media-item" key={item.id}>
                    <div className="hot-items__media">
                      <FontAwesomeIcon icon={item.mediaType === 'video' ? faPlayCircle : faImage} />
                    </div>
                    <p className="hot-items__description">{item.text}</p>                  
                  </div>
                ))}
              </Col>
              <Col xs={12} md={6} className="hot-items__col hot-items__col--secondary">
                { hotItems.secondary.map(item => (
                  <div className="hot-items__media-item" key={item.id}>
                    <div className="hot-items__media">
                      <FontAwesomeIcon icon={item.mediaType === 'video' ? faPlayCircle : faImage} />
                    </div>
                    <p className="hot-items__description">{item.text}</p>                  
                  </div>
                ))}
              </Col>
              <Col xs={12} className="hot-items__col hot-items__col--tertiary">
                { hotItems.tertiary.map(item => (
                  <div className="hot-items__media-item" key={item.id}>
                    <div className="hot-items__media">
                      <FontAwesomeIcon icon={item.mediaType === 'video' ? faPlayCircle : faImage} />
                    </div>
                    <p className="hot-items__description">{item.text}</p>                  
                  </div>
                ))}
              </Col>
            </>
          )}          
        </Container>
    </div>
  );
}

export default HotItems