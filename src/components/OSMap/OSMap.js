/** @jsx React.DOM */
/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global React */
import React from 'react';

'use strict';
module.exports = React.createClass({
  getInitialState: function () {
    return {
      map: {}
    };
  },
  componentDidMount: function() {
    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    this.setState({map: map});
  },
  modifyMap: function (method, options) {
    this.setState({
      map : this.state.map[method](options.latLong, options.zoom, options.zoom_options)
    });
  },
  render: function () {
    return (
      /* jshint ignore:start */
        <div id="map"/>
      /* jshint ignore:end */
    );
  }
});


