const { Pool, Client } = require('pg');

module.exports.pool = new Pool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Reviews',
  port: 5432,
});

const client = new Client({
  user: '',
  host: 'localhost',
  database: 'Reviews',
  password: '',
  port: 5432,
});

client
  .connect()
  .then(() => console.log('connected postgreSQL'))
  .catch((err) => console.error('Connection error: ', err));