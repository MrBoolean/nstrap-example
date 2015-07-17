var path = require('path');

module.exports = {
  production: {
    database: path.join(process.cwd(), 'data', 'production.db')
  },
  development: {
    database: path.join(process.cwd(), 'data', 'development.db')
  }
};