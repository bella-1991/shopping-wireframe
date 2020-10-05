import React, { useState } from 'react'
import { Container, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faImage } from '@fortawesome/free-solid-svg-icons';
import './hot-items.css';

function HotItems() {
  const [hotItems, setHotItems] = useState({
    primary: [      
      { id:0, text: 'Replace your text here 1!', mediaType: 'video' }
    ],
    secondary: [      
      { id:1, text: 'Replace your text here 2!', mediaType: 'image' },
      { id:2, text: 'Replace your text here 3!', mediaType: 'image' },
      { id:3, text: 'Replace your text here 4!', mediaType: 'image' },
      { id:4, text: 'Replace your text here 5!', mediaType: 'image' }
    ],
    tertiary: [      
      { id:5, text: 'Replace your text here 6!', mediaType: 'image' },
      { id:6, text: 'Replace your text here 7!', mediaType: 'image' },
      { id:7, text: 'Replace your text here 8!', mediaType: 'image' },
      { id:8, text: 'Replace your text here 9!', mediaType: 'image' }
    ]
  })
  return (
    <div className="hot-items">
        <header className="hot-items__header component-header">
            <h2>hot</h2>
        </header>
        <Container className="hot-items__container">
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
        </Container>
    </div>
  );
}

export default HotItems