import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Form, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import './header.css';

function Header() {  
  const [searchOpen, setSearchOpen] = useState(false),
        [navigation, setNavigation] = useState([
          { id: 0, text: 'Home', url: 'home' },
          { id: 1, text: 'About', url: 'about' },
          { id: 2, text: 'Messages', url: 'messages' },
          { id: 3, text: 'Features', url: 'features' },
          { id: 4, text: 'Tour', url: 'tour' }
        ])

  const toggleSearch = () => {
    console.log('open search')
    setSearchOpen(!searchOpen);
  }

  return (
        <div className="header">
          <Navbar collapseOnSelect expand="lg" className="header__navbar">
            <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Brand href="/">
                <img src="../assets/logo.png" alt="logo" />
              </Navbar.Brand>
              <div className="header__icons header__icons--mobile">
                <Button variant="dark" className="header__btn"><FontAwesomeIcon icon={faShoppingCart} /></Button>
                <Button variant="dark" className="header__btn" onClick={() => toggleSearch()}><FontAwesomeIcon icon={faSearch} /></Button>
              </div>
              <Navbar.Collapse id="responsive-navbar-nav" className="header__nav">                
                <Nav defaultActiveKey="/home" as="ul">
                  { navigation.map(item => 
                    <Nav.Item as="li" key={item.id}>
                      <Nav.Link href={"/" + item.url}>
                        {item.text}
                        <FontAwesomeIcon icon={faArrowRight} />
                      </Nav.Link>
                    </Nav.Item>
                  )}
                </Nav>

                <div className="header__icons header__icons--desktop">
                  <Button variant="dark" className="header__btn"><FontAwesomeIcon icon={faShoppingCart} /></Button>
                  <Button variant="dark" className="header__btn" onClick={() => toggleSearch()}><FontAwesomeIcon icon={faSearch} /></Button>
                </div>          
              </Navbar.Collapse>              
                
              <Form inline className={searchOpen ? "show-search" : ""}>
                <Container>
                  <div className="header__search-container">
                    <Button variant="dark" className="header__btn"><FontAwesomeIcon icon={faSearch} /></Button>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-dark" className="header__search-btn">Search</Button>
                    <Button className="header__close-search" onClick={() => toggleSearch()}><FontAwesomeIcon icon={faTimes} /></Button>
                  </div>
                </Container>
              </Form>      
            </Container>            
          </Navbar>
        </div>
  );
}

export default Header