'use strict';

//require('./NotFoundPage.less');

import React from 'react';

var NotFoundPage = React.createClass({

  render() {
    return (
      /* jshint ignore:start */
      <div>
        <h1>Page Not Found</h1>
        <p>Sorry, but the page you were trying to view does not exist.</p>
      </div>
      /* jshint ignore:end */
    );
  }

});

module.exports = NotFoundPage;
