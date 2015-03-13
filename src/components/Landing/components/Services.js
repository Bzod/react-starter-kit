'use strict';

import React from 'react';

var Services = React.createClass({

  render() {
    return (
      /* jshint ignore:start */
      <div id="Services" className="services">
        <div className="container">
          <div className="services-grids">
            <div className="col-md-4 grids-info">
              <i className="icon1"></i>
              <h3>Title Goes Here</h3>
              <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat</p>
            </div>
            <div className="col-md-4 grids-info">
              <i className="icon2"></i>
              <h3>Title Goes Here</h3>
              <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat</p>
            </div>
            <div className="col-md-4 grids-info">
              <i className="icon3"></i>
              <h3>Title Goes Here</h3>
              <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat</p>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
      /* jshint ignore:end */
    );
  }

});

module.exports = Services;
