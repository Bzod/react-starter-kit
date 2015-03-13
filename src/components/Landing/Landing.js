'use strict';
import React from 'react';

import Header from './components/Header.js';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Services';
import Price from './components/Price';
import Footer from './components/Footer';
import Features from './components/Features';

var Landing = React.createClass({
  render() {
    return (
      /* jshint ignore:start */
      <div className="ContentPage">
        <Header/>
        <About/>
        <Service/>
        <Features/>
        <Price/>
        <Contact/>
        <Footer/>
      </div>
      /* jshint ignore:end */
    );
  }
});

module.exports = Landing;
