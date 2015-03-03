'use strict';

import React from 'react';

var Navbar = React.createClass({

  render() {
    return (
      /* jshint ignore:start */
      <header className="header black-bg">
        <div className="sidebar-toggle-box">
          <div className="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation"></div>
        </div>
        <!--logo start-->
        <a href="/" className="logo"><b>MOBILE ROUTE</b></a>
        <!--logo end-->

        <div className="top-menu">
          <ul className="nav pull-right top-menu">
            <li><a className="logout" href="/privacy">Logout</a></li>
          </ul>
        </div>
      </header>
      /* jshint ignore:end */
    );
  }

});

module.exports = Navbar;
