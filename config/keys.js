// keys.js figure out what credentials to use.

if (process.env.NODE_ENV === 'production') {
  // We are in production - return the prod set of keys.
  module.exports = require('./prod');
} else {
  // We are in development - return the development set of keys.
  module.exports = require('./dev');
}
