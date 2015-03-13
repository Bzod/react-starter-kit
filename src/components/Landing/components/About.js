'use strict';

import React from 'react';

var About = React.createClass({

  render() {
    return (
      /* jshint ignore:start */
      <div id="About" className="about">
        <div className="container">
          <div className="about-info">
            <div className="col-md-8 about-left">
              <h2>Работает на вас</h2>
              <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
              <div className="sc-icons">
                <a href="#">
                  <span className="icon1"></span>
                </a>
                <a href="#">
                  <span className="icon2"></span>
                </a>
                <a href="#">
                  <span className="icon3"></span>
                </a>
                <a href="#">
                  <span classNameName="icon4"></span>
                </a>
              </div>
            </div>
            <div classNameName="col-md-4 about-right">
              <img classNameName="img-responsive" alt="" src={"images/carry-bags.png"}/>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      /* jshint ignore:end */
    );
  }

});

module.exports = About;
