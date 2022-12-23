const { Pool, Client } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Reviews',
  port: 5432,
});

pool
  .connect()
  .then(() => console.log('connected postgreSQL'))
  .catch((err) => console.error('Connection error: ', err));