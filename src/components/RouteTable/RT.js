/** @jsx React.DOM */
/** @jsx React.DOM */
import React from 'react';
import Griddle from'griddle-react';

'use strict';
module.exports = React.createClass({
  getInitialState: function () {
    return {
      Data: {}
    };
  },
  componentDidMount: function() {
    var Data = [
      {
        "id": 0,
        "name": "Mayer Leonard",
        "city": "Kapowsin",
        "state": "Hawaii",
        "country": "United Kingdom",
        "company": "Ovolo",
        "favoriteNumber": 7
      },
      {
        "id": 1,
        "name": "Koch Becker",
        "city": "Johnsonburg",
        "state": "New Jersey",
        "country": "Madagascar",
        "company": "Eventage",
        "favoriteNumber": 2
      },
      {
        "id": 2,
        "name": "Lowery Hopkins",
        "city": "Blanco",
        "state": "Arizona",
        "country": "Ukraine",
        "company": "Comtext",
        "favoriteNumber": 3
      },
      {
        "id": 3,
        "name": "Walters Mays",
        "city": "Glendale",
        "state": "Illinois",
        "country": "New Zealand",
        "company": "Corporana",
        "favoriteNumber": 6
      },
      {
        "id": 4,
        "name": "Shaw Lowe",
        "city": "Coultervillle",
        "state": "Wyoming",
        "country": "Ecuador",
        "company": "Isologica",
        "favoriteNumber": 2
      },
      {
        "id": 5,
        "name": "Shaw Lowe",
        "city": "Coultervillle",
        "state": "Wyoming",
        "country": "Ecuador",
        "company": "Isologica",
        "favoriteNumber": 2
      }
    ];
    this.setState({Data: Data});
  },
  render: function () {
    return (
      /* jshint ignore:start */
      <Griddle results={this.state.Data} tableClassName="table" columns={["id","name", "city", "state", "country"]} />
      /* jshint ignore:end */
    );
  }
});

