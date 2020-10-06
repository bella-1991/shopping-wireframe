import React, { useState, useEffect } from 'react'
import { Container, Button, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import './portfolio.scss';

function Portfolio() {
  const [portfolioItems, setPortfolioItems] = useState([]),
        [tags, setTags] = useState([
          { id:0, tag: 'All' },
          { id:1, tag: 'Feature' },
          { id:2, tag: 'Latest' },
          { id:3, tag: 'Primary' }
        ]),
        [selectedTag, setSelectedTag] = useState(tags[0].id),
        [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    fetch('/data/portfolio.json')
      .then(resp => resp.json())
      .then(portfolioItems => {
        setPortfolioItems(portfolioItems);
        setFilteredItems(portfolioItems);
      })
  }, []);

  const selectTag = id => {
    setSelectedTag(id);

    let newSet;

    if (id !== 0) {
       newSet = portfolioItems.filter(item => item.tags.includes(id));
    } else {
      newSet = portfolioItems;
    }
    
    setFilteredItems(newSet);
  }

  return (
    <div className="portfolio">
        <header className="portfolio__header component-header--transparent">
            <h2>Add Your Title Here</h2>
            <p>Replace your text here!  Replace your text here!</p>
        </header>
        <div className="portfolio__filter">
          <select className="portfolio__dropdown" value={selectedTag} onChange={e => selectTag(parseInt(e.target.value))}>
            { tags.map(item => (
              <option key={item.id} value={item.id}>{item.tag}</option>
            )) }
          </select>
          
          <ul className="portfolio__filter-list">
            { tags.map(item => (              
              <Button variant="outline-secondary" 
                      key={item.id} 
                      className={item.id === selectedTag ? 'active' : ''}
                      onClick={() => selectTag(item.id)}>{item.tag}</Button>
            )) }
          </ul>
        </div>

        <Container className="portfolio__container">
          { filteredItems.map(item =>
              <div className="portfolio__product product" key={item.id}>
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

export default Portfolio