import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import './footer.scss';

function Footer() {
  const [navigation, setNavigation] = useState([
    { id:0, text: 'About', url: 'about', submenu: [
      { id:0, text: 'Flowchart Software', url: 'Flowchart-Software' },
      { id:1, text: 'Free Mind Map Software', url: 'Free-Mind-Map-Software' },
      { id:2, text: 'Organisational Chart Software', url: 'Organisational-Chart-Software' },
      { id:3, text: 'Diagram Software', url: 'Diagram-Software' },
      { id:4, text: 'Floor Plan Software', url: 'Floor-Plan-Software' },
      { id:5, text: 'Network Diagram Software', url: 'Network-Diagram-Software' },
      { id:6, text: 'Wireframe', url: 'Wireframe' }
    ]},
    { id:1, text: 'Services', url: 'services', submenu: [
      { id:0, text: 'Diagramming Guides', url: 'Diagramming-Guides' },
      { id:1, text: 'Diagram Templates', url: 'Diagram-Templates' },
      { id:2, text: 'Diagram Types', url: 'Diagram-Types' },
      { id:3, text: 'All Symbols', url: 'All-Symbols' },
      { id:4, text: 'Help Index', url: 'Help-Index' },
      { id:5, text: 'Sitemap', url: 'Sitemap' }
    ]},
    { id:2, text: 'Sectors', url: 'sectors', submenu: [
      { id:0, text: 'Data Flow Diagram', url: 'Data-Flow-Diagram' },
      { id:1, text: 'Graphic Organiser', url: 'Graphic-Organiser' },
      { id:2, text: 'Concept Map', url: 'Concept-Map' },
      { id:3, text: 'Scientific Illustration', url: 'Scientific-Illustration' },
      { id:4, text: 'Flowchart Symbols', url: 'Flowchart-Symbols' },
      { id:5, text: 'Electrical Symbols', url: 'Electrical-Symbols' },
      { id:6, text: 'P&ID Symbols', url: 'PID-Symbols' }
    ]}
  ])
  return (
    <div className="footer">
        <Container className="footer__container">
          { navigation.map(item => (
            <div className="footer__col" key={item.id}>
              <h2><a href={"/" + item.url}>{item.text}</a></h2>
              { item.submenu && 
                <ul className="footer__list">
                  { item.submenu.map(subitem => (
                    <li key={item.id + "-" + subitem.id}><a href={"/" + subitem.url}>{subitem.url}</a></li>
                  )) }
                </ul>
              }
            </div>
          ))}          
        </Container>
    </div>
  );
}

export default Footer