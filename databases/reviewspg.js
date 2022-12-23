const { Pool } = require('pg');

const pool = new Pool({
  user: '',
  host: 'localhost',
  database: 'Reviews',
  password: '',
  port: 5432,
});

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

// pool
//   .connect()
//   .then(() => console.log('connected postgreSQL'))
//   .catch((err) => console.error('Connection error: ', err));