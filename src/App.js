import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Highlights from './components/highlights';
import NewArrivals from './components/newArrivals';
import HotItems from './components/hotItems';
import CarouselComponent from './components/carouselComponent';
import Portfolio from './components/portfolio';
import Features from './components/features';
import Latest from './components/latest';
import Footer from './components/footer';

import './App.css';
import './components/variables.css';
import './components/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Highlights />
      <NewArrivals />
      <CarouselComponent />
      <Portfolio />
      <HotItems />
      <Features />
      <Latest />
      <Footer />
    </div>
  );
}

export default App;
