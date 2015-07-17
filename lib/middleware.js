var express = require('express'),
    Promise = require('bluebird');

module.exports = function (kernel) {
  'use strict';

  var app = express();

  app.get('/', function (req, res) {
    res.send(kernel);
  });

  return app;
};