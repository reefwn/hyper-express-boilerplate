const configs = require('./src/configs')

module.exports = {
  client: 'pg',
  connection: configs.databaseUrl,
  directory: './migrations',
  loadExtensions: ['.js'],
};
