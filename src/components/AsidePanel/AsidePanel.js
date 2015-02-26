/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

import React from 'react';

var Aside = React.createClass({

  render() {
    return (
      /* jshint ignore:start */
      <aside>
        <div className="nav-collapse" id="sidebar">
          <ul className="sidebar-menu" id="nav-accordion">
            <li><a className="logout" href="/privacy">Logout</a></li>
            <li><a className="logout" href="/map">Map</a></li>
            <li><a className="logout" href="/profile">Profile</a></li>
          </ul>
        </div>
      </aside>
      /* jshint ignore:end */
    );
  }

});

module.exports = Aside;
