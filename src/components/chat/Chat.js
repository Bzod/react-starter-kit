'use strict';

import React from 'react';

var Aside = React.createClass({

  render() {
    return (
      /* jshint ignore:start */
      <aside>
        <div className="nav-collapse" id="sidebar">
          <ul className="sidebar-menu" id="nav-accordion">
            <li><a className="glyphicon glyphicon-map-marker" href="/map"> Map</a></li>
            <li><a className="glyphicon glyphicon-tasks" href="/tasks"> Tasks</a></li>
            <li><a className="glyphicon glyphicon-user" href="/profile"> Profile</a></li>
            <li><a className="glyphicon glyphicon-calendar" href="/calendar"> Calendar</a></li>
            <li><a className="glyphicon glyphicon-comment" href="/Chat"> Chat</a></li>
            <li><a className="glyphicon glyphicon-text-size" href="/privacy"> Privacy</a></li>
          </ul>
        </div>
      </aside>
      /* jshint ignore:end */
    );
  }

});

module.exports = Aside;
