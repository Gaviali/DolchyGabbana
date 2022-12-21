const { Pool, Client } = require('pg');
module.exports.pool = new Pool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Reviews',
  port: 3002,
});