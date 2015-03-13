'use strict';

import React from 'react';

var Navbar = React.createClass({

  render() {
    return (
      /* jshint ignore:start */
      <header className="header-app black-bg">
        <div className="sidebar-toggle-box">
          <div className="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation"></div>
        </div>
        <!--logo start-->
        <a href="/map" className="logo"><b>MOBILE ROUTE</b></a>
        <!--logo end-->

        <div className="top-menu">
          <ul className="nav pull-right top-menu">
            <li><a className="logout" href="/">Logout</a></li>
          </ul>
        </div>
      </header>
      /* jshint ignore:end */
    );
  }

});

module.exports = Navbar;
