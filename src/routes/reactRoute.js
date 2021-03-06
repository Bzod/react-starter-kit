/**
 * Created by anton_gorshenin on 10.03.2015.
 */
var React = require('react');
var fs = require('fs');
var _ = require( 'lodash');
var path = require('path');
var AppStore =require('../stores/AppStore');
var SessionStore =require('../stores/SessionStore');
var Dispatcher = require( '../core/Dispatcher');
var ActionTypes = require( '../constants/ActionTypes');
var App = new React.createFactory(require('../components/App'));
var templateFile = path.join(__dirname, 'templates/index.html');
var template = _.template(fs.readFileSync(templateFile, 'utf8'));
//
// Server-side rendering
// -----------------------------------------------------------------------------
// The top-level React component + HTML template for it
// Load pages from the `/fakeDB/pages` folder into the AppStore
module.exports = function(answer) {
  (function () {
    var assign = require('react/lib/Object.assign');
    var sourcePages = require('../db/fakeDB');
    var getPages = function () {
      var pages = [];
      for (var i in sourcePages) {
        var attr = sourcePages[i];
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
  answer.get('/api/page/*', function(req, res) {
    var urlPath = req.path.substr(9);
    var page = AppStore.getPage(urlPath);
    page.user = SessionStore.isLoggedIn('Test');
    res.send(page);
  });
  answer.get('*', function (req, res) {
      var data = {description: ''};
      var app = new App({
        user: {},
        path: req.path,
        onSetTitle: function (title) {
          data.title = title;
        },
        onSetMeta: function (name, content) {
          data[name] = content;
        },
        onPageNotFound: function () {
          res.status(404);
        }
      });
      data.body = React.renderToString(app);
      var html = template(data);
      res.send(html);
  });
};
