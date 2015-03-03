'use strict';

import React from 'react';

var ContentPage = React.createClass({

  propTypes: {
    body: React.PropTypes.string.isRequired
  },

  render() {
    var { className, title, body, other } = this.props;

    /* jshint ignore:start */
    return <main className={'ContentPage ' + className}
      dangerouslySetInnerHTML={{__html: body}} />;
    /* jshint ignore:end */
  }

});

module.exports = ContentPage;
