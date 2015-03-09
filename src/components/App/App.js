'use strict';
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
import RT from '../RT/RT.js';
import WebSocket from 'websocket';
WebSocket = WebSocket.w3cwebsocket;



var Application = React.createClass({

  //SendAuth: function () {
  //  var ws = new WebSocket("ws://185.49.69.143:20080");
  //  ws.onopen = function () {
  //    console.log('conected');
  //    ws.send(JSON.stringify({"pid": 1, "method": "auth.login", "data": {"login": "Anton", "password": "pass123"}}));
  //  };
  //  ws.onmessage = function (message) {
  //    var str = message.data.substring(0, message.data.length - 1);
  //    console.log(JSON.parse(str))
  //  };
  //},

  mixins: [NavigationMixin],

  propTypes: {
    path: React.PropTypes.string.isRequired,
    onSetTitle: React.PropTypes.func.isRequired,
    onSetMeta: React.PropTypes.func.isRequired,
    onPageNotFound: React.PropTypes.func.isRequired
  },
  //componentWillMount: function () {
  //  this.SendAuth();
  //},
  render() {
    var page = AppStore.getPage(this.props.path);
    invariant(page !== undefined, 'Failed to load page content.');
    this.props.onSetTitle(page.title);

    if (page.type === 'notfound') {
      this.props.onPageNotFound();
      return React.createElement(NotFoundPage, page);
    }
    return (
        //React.DOM.input( {type:"submit", value:"Refresh", onClick:this.SendAuth} )
      /* jshint ignore:start */
        <ContentPage className="container-fluid" {...page}/>
      //<div className="App">
      //{this.props.path != '/' &&
      //  <div className="navigation">
      //      <Navbar/>
      //      <AsidePanel/>
      //  </div>
      //  }
      //  {
      //  this.props.path === '/map' ?
      //    <div className="map-container">
      //      <Map/>
      //      <RT/>
      //    </div>:
      //    <div className="container">
      //      <h2>{page.title}</h2>
      //    </div>
      //    }
      //  {
      //  this.props.path != '/map' &&
      //  <ContentPage className="container" {...page}/>
      //    }
      //  {
      //    this.props.path != '/map' &&
      //  <div className="navbar-footer">
      //    <div className="container">
      //      <p className="text-muted">
      //        <span>© MobileRoute</span>
      //        <span><a href="/">Home</a></span>
      //        <span><a href="/privacy">Privacy</a></span>
      //      </p>
      //    </div>
      //  </div>
      //  }
      //</div>
      /* jshint ignore:end */
    );
  }

});

module.exports = Application;
