/*!
 * Facebook React Starter Kit | https://github.com/kriasoft/react-starter-kit
 * Copyright (c) KriaSoft, LLC. All rights reserved. See LICENSE.txt
 */

'use strict';

var webpack = require('webpack');
var update = require('react/lib/update');
var argv = require('minimist')(process.argv.slice(2));

var DEBUG = !argv.release;

// Common configuration chunk to be used for both
// client-side (app.js) and server-side (server.js) bundles
var config = {
  output: {
    path: './build/',
    publicPath: './build/',
    sourcePrefix: '  '
  },

  cache: DEBUG,
  debug: DEBUG,
  devtool: DEBUG ? '#inline-source-map' : false,

  stats: {
    colors: true,
    reasons: DEBUG
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ],

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jshint'
      }
    ],

    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:[' +
        '"Android 2.3", "Android >= 4", "Chrome >= 20", "Firefox >= 24", ' +
        '"Explorer >= 8", "iOS >= 6", "Opera >= 12", "Safari >= 6"]}'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:[' +
        '"Android 2.3", "Android >= 4", "Chrome >= 20", "Firefox >= 24", ' +
        '"Explorer >= 8", "iOS >= 6", "Opera >= 12", "Safari >= 6"]}!less-loader'
      },
      {
        test: /\.gif/,
        loader: 'url-loader?limit=10000&mimetype=images/gif'
      },
      {
        test: /\.jpg/,
        loader: 'url-loader?limit=10000&mimetype=images/jpg'
      },
      {
        test: /\.png/,
        loader: 'url-loader?limit=10000&mimetype=images/png'
      },
      {
        test: /\.svg/,
        loader: 'url-loader?limit=10000&mimetype=images/svg+xml'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?experimental'
      }
    ]
  }
};

// Configuration for the client-side bundle
var appConfig = update(config, {
  entry: {$set: './src/app.js'},
  output: {filename: {$set: 'app.js'}},
  plugins: {
    $push: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
        '__DEV__': DEBUG,
        '__SERVER__': false
      })
    ].concat(DEBUG ? [] : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.AggressiveMergingPlugin()
    ])
  }
});

// Configuration for the server-side bundle
var serverConfig = update(config, {
  entry: {$set: './src/bin/startup.js'},
  output: {
    filename: {$set: 'server.js'},
    libraryTarget: {$set: 'commonjs2'}
  },
  target: {$set: 'node'},
  externals: {$set: /^[a-z\-0-9]+$/},
  node: {$set: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  }},
  plugins: {
    $push: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
        '__DEV__': DEBUG,
        '__SERVER__': true
      })
    ]
  },
  module: {loaders: {$apply: function(loaders) {
    loaders.forEach(function(loader) {
      loader.loader = loader.loader.replace('style-loader!', '');
    });
    return loaders;
  }}}
});

module.exports = [appConfig, serverConfig];
