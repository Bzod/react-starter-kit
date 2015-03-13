'use strict';

import React from 'react';
var Footer = React.createClass({

  render() {
    return (
      /* jshint ignore:start */
      <div className="footer">
        <div className="container">
          <div className="copy-rights">
            <p>
              Powered by
              <a href="http://MobileRoute.com/"> MobileRoute.</a>
            </p>
          </div>
          <a id="toTop" href="#">
            <span id="toTopHover" href='#'></span>
          </a>
        </div>
      </div>
      /* jshint ignore:end */
    );
  }

});

module.exports = Footer;
