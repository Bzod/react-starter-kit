'use strict';

var _ = require('lodash');
var fs = require( 'fs');
var path = require('path');
var express = require( 'express');
var React = require( 'react');

var Dispatcher  = require(  './core/Dispatcher');
var ActionTypes  = require(  './constants/ActionTypes');
var AppStore  = require(  './stores/AppStore');

var server = express();

server.set('port', (process.env.PORT || 5000));
server.use(express.static(path.join(__dirname)));
//server.use(logger('dev'));
//
// Page API
// -----------------------------------------------------------------------------
server.get('/api/page/*', function(req, res) {
  var path = req.path.substr(9);
  var page = AppStore.getPage(path);
  res.send(page);
});

//
// Server-side rendering
// -----------------------------------------------------------------------------

// The top-level React component + HTML template for it
var App = React.createFactory(require('./components/App'));
var templateFile = path.join(__dirname, 'templates/index.html');
var template = _.template(fs.readFileSync(templateFile, 'utf8'));

server.get('*', function(req, res) {
  var data = {description: ''};
  var app = new App({
    path: req.path,
    onSetTitle: function(title) { data.title = title; },
    onSetMeta: function(name, content) { data[name] = content; },
    onPageNotFound: function() { res.status(404); }
  });
  data.body = React.renderToString(app);
  var html = template(data);
  res.send(html);
});

// Load pages from the `/src/content/` folder into the AppStore
(function() {
  var assign = require('react/lib/Object.assign');
  var sourcePages = require('./db/fakeDB.js');
  var getPages = function(data) {
    var pages = [];
    for(var i in data) {
      var attr = data[i];
      var page = assign({}, {path: attr.path, body: attr.body}, attr.attributes);
      Dispatcher.handleServerAction({
        actionType: ActionTypes.LOAD_PAGE,
        path: attr.path,
        page: page
      });
    }
    return pages;
  };
  return getPages(sourcePages);
})();


// development error handler
// will print stacktrace
if (server.get('env') === 'development') {
  server.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
server.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = server;
