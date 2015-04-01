'use strict';
import React from 'react';
import invariant from 'react/lib/invariant';
import NavigationMixin from './NavigationMixin';
import AppStore from '../../stores/AppStore';
import SessionStore from '../../stores/SessionStore';
import Navbar from '../Navigation';
import ContentPage from '../ContentPage';
import NotFoundPage from '../NotFoundPage';
import AsidePanel from '../AsidePanel';
import Map from '../OSMap';
import RT from '../RT/RT';
import Landing from '../Landing/Landing.js'


var Application = React.createClass({
  mixins: [NavigationMixin],

  propTypes: {
    user: React.PropTypes.object.isRequired,
    path: React.PropTypes.string.isRequired,
    onSetTitle: React.PropTypes.func.isRequired,
    onSetMeta: React.PropTypes.func.isRequired,
    onPageNotFound: React.PropTypes.func.isRequired
  },
  render() {
    console.log(this.props.user.id);
    var auth = SessionStore.isLoggedIn(this.props.user.id);
    var page = AppStore.getPage(this.props.path);
    invariant(page !== undefined, 'Failed to load page content.');
    this.props.onSetTitle(page.title);

    if (page.type === 'notfound') {
      this.props.onPageNotFound();
      return React.createElement(NotFoundPage, page);
    }
    if (auth.type === 'notfound'){
      console.log('Не авторизован');
      this.props.path = '/';
    }
    //console.log(auth);
    return (
      /* jshint ignore:start */
      <div className="App">
      {this.props.path === '/' ?
        <Landing/>:
        <div className="navigation">
          <Navbar/>
          <AsidePanel/>
        </div>}
        {this.props.path === '/map' &&
        <div className="map-container">
        <Map/>
        <RT/>
        </div>
        }
      </div>
      /* jshint ignore:end */
    );
  }
});

module.exports = Application;
