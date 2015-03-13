'use strict';

import React from 'react';

var Price = React.createClass({

  render() {
    return (
      /* jshint ignore:start */
      <div id="Price" className="price">
        <div className="container">
          <div className="price-info">
            <h3>Что подойдет именно вам</h3>
            <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="price-grid">
            <div className="price-column">
              <div className="price-col-top">
                <h4>ECONOMY</h4>
                <div className="price-col-bottom">
                  <h2>5$</h2>
                  <span className="p-line"></span>
                  <ul className="pr-list">
                    <li>2 GB</li>
                    <li>200MB</li>
                    <li>UNLIMITED</li>
                    <li>200MB</li>
                    <li>UNLIMITED</li>
                    <li>UNLIMITED</li>
                    <li>до 3 Участников</li>
                  </ul>
                  <a href="#">Начать сейчас</a>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="price-column">
              <div className="price-col-top-in">
                <h4>PERSONAL</h4>
                <div className="price-col-bottom-in">
                  <h2>15$</h2>
                  <span className="p-line"></span>
                  <ul className="pr-list">
                    <li>2 GB</li>
                    <li>200MB</li>
                    <li>UNLIMITED</li>
                    <li>200MB</li>
                    <li>UNLIMITED</li>
                    <li>UNLIMITED</li>
                    <li>до 15 Участников</li>
                  </ul>
                  <a href="#">Начать сейчас</a>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="price-column">
                <div className="price-col-top-inn">
                  <h4>BUSINESS</h4>
                  <div className="price-col-bottom-inn">
                    <h2>20$</h2>
                    <span className="p-line"></span>
                    <ul className="pr-list">
                      <li>2 GB</li>
                      <li>200MB</li>
                      <li>UNLIMITED</li>
                      <li>200MB</li>
                      <li>UNLIMITED</li>
                      <li>UNLIMITED</li>
                      <li>от 15 Участников</li>
                    </ul>
                    <a href="#">Начать сейчас</a>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      /* jshint ignore:end */
    );
  }

});

module.exports = Price;
