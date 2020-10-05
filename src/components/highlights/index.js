import React from 'react'
import { Container } from 'react-bootstrap';
import './highlights.css';

function Highlights() {
  return (
    <div className="highlights">
        <Container className="highlights__container">
            <div className="highlights__col">
                <h2>Replace your text here!</h2>
                <img className="highlights__image" alt="handbag" src="../assets/handbag.png" />
            </div>
            <div className="highlights__col">
                <h2>Replace your text here!</h2>
                <img className="highlights__image" alt="hat" src="../assets/hat.png" />
            </div>
            <div className="highlights__col">
                <h2>Replace your text here!</h2>
                <img className="highlights__image" alt="watch" src="../assets/watch.png" />
            </div>
        </Container>
    </div>
  );
}

export default Highlights