const { Pool } = require('pg');
const connectionString = 'postgresql://localhost:5432/reviews';
const parser = require('csv-parser');
const fs = require('fs'); // maybe need promises

const pool = new Pool({
  connectionString,
  // user: 'root',
  // host: 'localhost',
  // database: 'reviews',
  // password: '',
  // port: 3000,
});

// psql -d reviews -a -f databases/reviewsPg.sql

console.log('test');

pool.query('SELECT * FROM characteristics LIMIT 10', (err, res) => {
  // console.log(err, res) ok I should use a limit or else time is lost
  console.log(res.rows);
  console.log('loaded things')
  pool.end()
})

// pool
//   .connect()
//   .then(() => console.log('connected postgreSQL'))
//   .catch((err) => console.error('Connection error: ', err));

// \l list all databases
// \dt list all database tables