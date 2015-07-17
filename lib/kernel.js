'use strict';

var nstrap = require('nstrap'),
    path   = require('path'),
    Db     = require('sqlite3').Database,
    kernel = nstrap();

kernel.add('env', function (done) {
  done(process.env.NODE_ENV || 'development');
});

kernel.add('config', ['env'], function (env, done) {
  var config = require(path.join(process.cwd(), 'config.js'));

  if (!config[env]) {
    return done(new Error('The env ' + env + ' does not exist'));
  }

  done(config[env]);
});

kernel.add('database', ['config'], function (config, done) {
  done(new Db(config.database));
});

module.exports = kernel;