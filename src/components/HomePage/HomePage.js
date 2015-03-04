'use strict';

import React from 'react';

var HomePage = React.createClass({
  propTypes: {
    body: React.PropTypes.string.isRequired
  },

  render() {
    /* jshint ignore:start */
    return <div className="ContentPage"
      dangerouslySetInnerHTML={{__html: this.props.body}} />;
    /* jshint ignore:end */
  }

});

module.exports = HomePage;
