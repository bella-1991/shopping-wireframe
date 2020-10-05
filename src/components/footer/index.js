import React from 'react'
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import './footer.css';

function Footer() {
  return (
    <div className="footer">
        <Container className="footer__container">
          <div className="footer__col">
              <h2>About</h2>
              <ul className="footer__list">
                <li>Flowchart Software</li>
                <li>Free Mind Map Software</li>
                <li>Oranisational Chart Software</li>
                <li>Diagram Software</li>
                <li>Floor Plan Software</li>
                <li>Network Diagram Software</li>
                <li>Wireframe</li>
              </ul>
          </div>
          <div className="footer__col">
              <h2>Services</h2>
              <ul className="footer__list">
                <li>Diagramming Guides</li>
                <li>Diagram Templates</li>
                <li>Diagram Types</li>
                <li>All Symbols</li>
                <li>Help Index</li>
                <li>Sitemap</li>
                
              </ul>
          </div>
          <div className="footer__col">
              <h2>Sectors</h2>
              <ul className="footer__list">
                <li>Data Flow Diagram</li>
                <li>Graphic Organiser</li>
                <li>Concept Map</li>
                <li>Scientific Illustration</li>
                <li>Flowchart Symbols</li>
                <li>Electrical Symbols</li>
                <li>P&ID Symbols</li>
              </ul>
          </div>
        </Container>
    </div>
  );
}

export default Footer