import React from 'react';

import { Footer, Blog, Feature, Possibility, WhatGPTDEV, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './app.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPTDEV />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
