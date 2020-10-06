import React from 'react'
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import './features.scss';

function Features() {
  return (
    <div className="features">
        <Container fluid className="features__container">
            <div className="features__media">
                <FontAwesomeIcon icon={faImage} />
            </div>
            <div className="features__media">
                <FontAwesomeIcon icon={faImage} />
            </div>
            <div className="features__media">
                <FontAwesomeIcon icon={faImage} />
            </div>
        </Container>
    </div>
  );
}

export default Features