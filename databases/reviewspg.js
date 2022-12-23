const { Pool } = require('pg');
const connectionString = 'postgresql://127.0.0.1:5432/reviews'

const pool = new Pool({
  connectionString,
  // user: 'root',
  // host: '',
  // database: 'reviews',
  // password: '',
  // port: 5432,
});

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

// pool
//   .connect()
//   .then(() => console.log('connected postgreSQL'))
//   .catch((err) => console.error('Connection error: ', err));