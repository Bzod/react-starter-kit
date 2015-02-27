/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

import './App.less';

import React from 'react';
import invariant from 'react/lib/invariant';
import AppActions from '../../actions/AppActions';
import NavigationMixin from './NavigationMixin';
import AppStore from '../../stores/AppStore';
import Navbar from '../Navigation';
import ContentPage from '../ContentPage';
import NotFoundPage from '../NotFoundPage';
import AsidePanel from '../AsidePanel';
import Map from '../OSMap';
import RT from '../RouteTable/RT';


var Application = React.createClass({
  mixins: [NavigationMixin],

  propTypes: {
    path: React.PropTypes.string.isRequired,
    onSetTitle: React.PropTypes.func.isRequired,
    onSetMeta: React.PropTypes.func.isRequired,
    onPageNotFound: React.PropTypes.func.isRequired
  },

  render() {
    var page = AppStore.getPage(this.props.path);
    invariant(page !== undefined, 'Failed to load page content.');
    this.props.onSetTitle(page.title);

    if (page.type === 'notfound') {
      this.props.onPageNotFound();
      return React.createElement(NotFoundPage, page);
    }
    return (
      /* jshint ignore:start */

      <div className="App">
      {this.props.path != '/' &&
        <div className="navigation">
            <Navbar/>
            <AsidePanel/>
        </div>
        }
        {
        this.props.path === '/map' ?
          <div className="map-container">
            <Map/>
            <RT/>
          </div>:
          <div className="container">
            <h2>{page.title}</h2>
          </div>
          }
        {
        this.props.path != '/map' &&
        <ContentPage className="container" {...page}/>
          }
        {
          this.props.path != '/map' &&
        <div className="navbar-footer">
          <div className="container">
            <p className="text-muted">
              <span>© MobileRoute</span>
              <span><a href="/">Home</a></span>
              <span><a href="/privacy">Privacy</a></span>
            </p>
          </div>
        </div>
        }
      </div>
      /* jshint ignore:end */
    );
  }

});

module.exports = Application;
