const { Pool } = require('pg');
const connectionString = 'postgresql://localhost:5432/reviews'

const pool = new Pool({
  connectionString,
  // user: 'root',
  // host: 'localhost',
  // database: 'reviews',
  // password: '',
  // port: 3000,
});

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

// pool
//   .connect()
//   .then(() => console.log('connected postgreSQL'))
//   .catch((err) => console.error('Connection error: ', err));