const configs = require('../configs')

const knex = require('knex')({
  client: 'pg',
  connection: configs.databaseUrl,
});

module.exports = knex;