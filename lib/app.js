module.exports = function () {
  'use strict';

  var kernel     = require('./kernel'),
      middleware = require('./middleware');

  kernel.run()
    .then(function (data) {
      return middleware(data);
    })
    .then(function (app) {
      app.listen(1337);
    })
    .catch(function (err) {
      throw err;
    })
  ;
};