/** @jsx React.DOM */
/*jshint indent: 2, node: true, nomen: true, browser: true*/
/*global React */
import React from 'react';
var cords = [[51.508, -0.11],[52.508, -0.11],[53.508, -1.11],[43.508, -1.11]];
var point;
'use strict';
module.exports = React.createClass({
  getInitialState: function () {
    return {
      map: {}
    };
  },
  componentDidMount: function() {
    var map = L.map('map').setView([52.505, -0.09], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.polyline(cords,{
      color: 'red',
      weight: 3
    }).addTo(map);
    function circle(point){
      L.circle(point, 50, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5
      }).addTo(map);
    }
    function pointAdd(points){
      for (var i=0; i<points.length; i++ ){
        point = points[i];
        circle(point);
      }
    }
    pointAdd(cords);
    this.setState({map: map});
    window.map = this;
  },
  render: function () {
    return (
      /* jshint ignore:start */
        <div id="map"/>
      /* jshint ignore:end */
    );
  }
});


