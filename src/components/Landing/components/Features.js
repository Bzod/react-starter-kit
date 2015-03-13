'use strict';

import React from 'react';

var Features = React.createClass({

  render() {
    return (
      /* jshint ignore:start */
      <div id="Features" className="Features">
        <div className="container">
          <div className="Features-info">
            <div className="Features-info-top">
              <h3>Lorem Ipsum Dolor Sit Amet</h3>
              <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.</p>
            </div>
            <div className="slider">
              <ul id="slider1" className="rslides">
                <li>
                  <img alt="" src={"images/slider.png"}/>
                  </li>
                  <li>
                    <img alt="" src={"images/slider.png"}/>
                    </li>
                    <li>
                      <img alt="" src={"images/slider.png"}/>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
      /* jshint ignore:end */
    );
  }

});

module.exports = Features;
